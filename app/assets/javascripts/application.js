// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui.min
//= require bootstrap
//= require_tree .


!function ($) {

  $(function(){


	    var $modal = $('#add-modal')

	    $('.modal-btn').click(function(e) {
            e.preventDefault();

	    	var typeName = $(this).attr('data-type');
            $('.modal-header h3', $modal).html('Add ' + typeName);
            $('#' + typeName+ '.modal-type', $modal).addClass('active');
            $('#btn-add').attr("type", typeName); // add type class to add btn

        });


        $('#btn-add').click(function(e) {
            e.preventDefault();

            var typeclass = $(this).attr('type');
            
            switch(typeclass)
            {
            case "photo":
                previewPhoto(false);
                $('#photo_new_infobit').submit();
                break;
            case "youtube":
                previewYoutube(false);
                $('#youtube_new_infobit').submit();
                break;
            case "quote":
                previewQuote(false);
                $('#quote_new_infobit').submit();
                break;
            case "wikipedia":
                previewWikipedia(false);
                $('#wikipedia_new_infobit').submit();
                break;
            case "vimeo":
                previewVimeo(false);
                $('#vimeo_new_infobit').submit();
                break;
            case "article":
                previewArticle(false);
                $('#article_new_infobit').submit();
                break;
            case "website":
                previewWebsite(false);
                $('#website_new_infobit').submit();
                break;
            default:
              
            }

            addInfobitToCanvas();
			setupInteractions();
        });

        function addInfobitToCanvas() {
            var $newInfobit = $($('#preview', $modal).html());
            $("#canvas-inner").prepend( $newInfobit ).isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
            //$('#add-modal').modal('hide');  
        }


        function addInfobitSuccessCallback(data, type) {  
            var alertBox = '<div class="alert alert-success fade in"><a class="close" data-dismiss="alert">×</a>Your infobit has been added!</div>';
            $('#moday-body').append(alertBox);
        } 
        function addInfobitFailureCallback(error, type) {  
            var alertBox = '<div class="alert alert-error fade in"><a class="close" data-dismiss="alert">×</a>Error: ' + data +'</div>';
            $('#' + type).prepend(alertBox);
        } 


        // setup the AJAX callbacks
        $("#youtube_new_infobit")
          .bind('ajax:success', function(data, status, xhr) { addInfobitSuccessCallback(data, "youtube");})
          .bind('ajax:failure', function(xhr, status, error) {addInfobitFailureCallback(error, "youtube");})
        $("#photo_new_infobit")
          .bind('ajax:success', function(data, status, xhr) { addInfobitSuccessCallback(data, "photo");})
          .bind('ajax:failure', function(xhr, status, error) {addInfobitFailureCallback(error, "photo");})
        $("#quote_new_infobit")
          .bind('ajax:success', function(data, status, xhr) { addInfobitSuccessCallback(data, "quote");})
          .bind('ajax:failure', function(xhr, status, error) {addInfobitFailureCallback(error, "quote");})
        $("#wikipedia_new_infobit")
          .bind('ajax:success', function(data, status, xhr) { addInfobitSuccessCallback(data, "wikipedia");})
          .bind('ajax:failure', function(xhr, status, error) {addInfobitFailureCallback(error, "wikipedia");})
        $("#vimeo_new_infobit")
          .bind('ajax:success', function(data, status, xhr) { addInfobitSuccessCallback(data, "vimeo");})
          .bind('ajax:failure', function(xhr, status, error) {addInfobitFailureCallback(error, "vimeo");})
        $("#article_new_infobit")
          .bind('ajax:success', function(data, status, xhr) { addInfobitSuccessCallback(data, "article");})
          .bind('ajax:failure', function(xhr, status, error) {addInfobitFailureCallback(error, "article");})
        $("#website_new_infobit")
          .bind('ajax:success', function(data, status, xhr) { addInfobitSuccessCallback(data, "website");})
          .bind('ajax:failure', function(xhr, status, error) {addInfobitFailureCallback(error, "website");})


        // generate quote preview
        $('#btn-preview-quote').click(function(e) {
            e.preventDefault();
            previewQuote(true);
        });



        function previewQuote(display) {
            var $previewInfobit = $('#preview .infobit');
            var $previewForm = $('#quote_new_infobit');

            var quoteAuthor = $('#quote_infobit_title', $previewForm).val();
            var quoteAuthorTitle = $('#quote_infobit_subtitle', $previewForm).val();
            var quoteContent = $('#quote_infobit_description', $previewForm).val();
            var quoteLink = $('#quote_infobit_link', $previewForm).val();

            var infobitContent = '<div class="padding">';
            infobitContent += '<p class="lead">' + quoteContent + '</p>';
            infobitContent += '<p class="pull-right"><b>' + quoteAuthor + '</b><br>';
            infobitContent +=  quoteAuthorTitle + '</p>';
            infobitContent += '<div class="clear"></div></div>';

            $('.infobit-content', $previewInfobit).html(infobitContent);
            $('.link', $previewInfobit).html('via <a href="' + quoteLink + '">Quote Source</a>');
            
            setupInteractions();
            if (display == true)
                $('#preview-wrap').show();
        }


        // generate article preview
        $('#btn-preview-article').click(function(e) {
            e.preventDefault();
            previewArticle(true);
        });

        function previewArticle(display) {
            var $previewInfobit = $('#preview .infobit');
            var $previewForm = $('#article_new_infobit');

            var articleSource = $('#article_infobit_source', $previewForm).val();
            var articleTitle = $('#article_infobit_title', $previewForm).val();
            var articleContent = $('#article_infobit_description', $previewForm).val();
            var articleLink = $('#article_infobit_link', $previewForm).val();

            var infobitContent = '<div class="padding">';
            infobitContent += '<h1>' + articleTitle + '</h1>';
            infobitContent += '<h6>' + articleSource + '</h6>';
            infobitContent += '<p>' + articleContent + '</p>';
            infobitContent += '</div>';

            $('.infobit-content', $previewInfobit).html(infobitContent);
            $('.link', $previewInfobit).html('via <a href="' + articleLink + '">Article Source</a>');
            
            setupInteractions();
            if (display == true)
                $('#preview-wrap').show();
        }

        // generate website preview
        $('#btn-preview-website').click(function(e) {
            e.preventDefault();
            previewWebsite(true);
        });

        function previewWebsite(display) {
            var $previewInfobit = $('#preview .infobit');
            var $previewForm = $('#website_new_infobit');

            var websiteTitle = $('#website_infobit_title', $previewForm).val();
            var websiteLink = $('#website_infobit_link', $previewForm).val();

            var thumb_url = "http://api.url2png.com/v3/P4F93DB86362DD/9709ddfb5b03823bb43e028b2adfa249/330x200/" + websiteLink

            var infobitContent = '<div class="padding">';
            infobitContent += '<p><strong><a href="' + websiteLink + '">' + websiteTitle + '</a></strong><br>';
            infobitContent += websiteLink + '</p>';
            infobitContent += '<img alt="888634656411833598" class="link-thumb" height="200" src="'+ thumb_url +'" width="330" />'
            infobitContent += '</div>';

            $('.infobit-content', $previewInfobit).html(infobitContent);
            $('.link', $previewInfobit).html('via <a href="' + websiteLink + '">Website</a>');
            
            setupInteractions();
            if (display == true)
                $('#preview-wrap').show();
        }


        // generate youtube preview
        $('#btn-preview-youtube').click(function(e) {
            e.preventDefault();
            previewYoutube(true);
        });

        function previewYoutube(display) {
            var $previewInfobit = $('#preview .infobit');
            var $previewForm = $('#youtube_new_infobit');

            var youtubeLink = $('#youtube_infobit_link', $previewForm).val();
            var youtubeID = getYouTubeID(youtubeLink);

            var infobitContent = '<iframe width="380" height="295" src="'
            infobitContent += 'http://www.youtube.com/embed/' + youtubeID + '?wmode=opaque"';
            infobitContent += ' frameborder="0" allowfullscreen></iframe>';

            $('.infobit-content', $previewInfobit).html(infobitContent);
            $('.link', $previewInfobit).html('via <a href="' + youtubeLink + '">YouTube</a>');

            setupInteractions();
            if (display == true)
                $('#preview-wrap').show();
        }


        // generate photo preview
        $('#btn-preview-photo').click(function(e) {
            e.preventDefault();
            previewPhoto(true); 
        });

        function previewPhoto(display) {
            var $previewInfobit = $('#preview .infobit');
            var $previewForm = $('#photo_new_infobit');

            var photoTitle = $('#photo_infobit_title', $previewForm).val();
            var photoDesc = $('#photo_infobit_description', $previewForm).val();
            var photoLink = $('#photo_infobit_link', $previewForm).val();

            var infobitContent = '<div class="img-overlay">'
            infobitContent += '<div class="img-overlay-content">';
            infobitContent += '<h1>' + photoTitle + '</h1>';
            infobitContent += '<p>' + photoDesc + '</p></div>';
            infobitContent += '<img src="' + photoLink + '" alt="img" width="580"></div>';

            $('.infobit-content', $previewInfobit).html(infobitContent);
            $('.link', $previewInfobit).html('via <a href="' + photoLink + '">Link</a>');
            
            setupInteractions();
            if (display == true)
              $('#preview-wrap').show();
        }


        // generate vimeo preview
        $('#btn-preview-vimeo').click(function(e) {
            e.preventDefault();
            previewVimeo(true);
        });

        function previewVimeo(display) {
            var $previewInfobit = $('#preview .infobit');
            var $previewForm = $('#vimeo_new_infobit');

            var vimeoLink = $('#vimeo_infobit_link', $previewForm).val();
            var vimeoID = getVimeoID(vimeoLink);

            var infobitContent = '<iframe width="380" height="295" src="'
            infobitContent += 'http://player.vimeo.com/video/' + vimeoID + '?byline=0&amp;portrait=0"';
            infobitContent += ' frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>';

            $('.infobit-content', $previewInfobit).html(infobitContent);
            $('.link', $previewInfobit).html('via <a href="' + vimeoLink + '">Vimeo</a>');

            setupInteractions();
            if (display == true)
                $('#preview-wrap').show();
        }


        // generate wikipedia preview
        $('#btn-preview-wikipedia').click(function(e) {
            e.preventDefault();
            previewWikipedia(true);
        });


        function previewWikipedia(display) {
            var $previewInfobit = $('#preview .infobit');
            var $previewForm = $('#wikipedia_new_infobit');

            
            var wikipediaContent = $('#wikipedia_infobit_description', $previewForm).val();
            var wikipediaLink = $('#wikipedia_infobit_link', $previewForm).val();
            var wikipediaTitle = $('#wikipedia_infobit_title', $previewForm).val();

            var infobitContent = '<div class="padding">';
            infobitContent += '<h3>' + wikipediaTitle + '</h3>';
            infobitContent += '<p>' + wikipediaContent + '...';
            infobitContent += '<a rel="tooltip" href="#" data-original-title="Reveal more text">more</a></p>';
            infobitContent += '</div>';

            $('.infobit-content', $previewInfobit).html(infobitContent);
            $('.link', $previewInfobit).html('via <a href="' + wikipediaLink + '">Wikipedia</a>');
            
            setupInteractions();
            if (display == true)
              $('#preview-wrap').show();
        }



        // called when modal box is about to be hidden
		$('#add-modal').on('hide', function () {
		  $('.modal-type.active').removeClass('active'); // hide this modal type
		  $('#preview-wrap').hide();
		})


		setupInteractions(); // set up the interactivity of infobits
		function setupInteractions() {

			$('.img-overlay').hover(
			  function () {
			    $('.img-overlay-content', this).slideDown();
			  },
			  function () {
			    $('.img-overlay-content', this).fadeOut(100);
			  }
			);


			// tooltip setup
		    $('a[rel=tooltip]').tooltip({
		      placement: "bottom"
		    });

            // tooltip setup
            $('a.infobit-icon').tooltip({
              placement: "top"
            });

		    $('div[rel=tooltip]').tooltip({
		      placement: "top"
		    });

            $('i[rel=tooltip]').tooltip({
              placement: "top"
            });

            $('a[rel="tooltip nofollow"]').tooltip({
              placement: "top"
            });

		}
		

		function getYouTubeID(url){
		    var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
		    var match = url.match(regExp);
		    if (match&&match[1].length==11){
		        return match[1];
		    }else{
		        alert("Error: please enter a valid YouTube URL.");
		    }
		}

		function getVimeoID(url){
			var regExp = /http:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
			var match = url.match(regExp);
			if (match&&match[2].length==8){
			    return match[2];
			}else{
			    alert("Error: please enter a valid Vimeo URL.");
			}
		}

		$('#edit-submit').click(function(e) {
		  $('.ajax-edit').submit();
		});

		$('.ajax-edit').bind('ajax:success', function() {  
            var title = $('#infozaic_title', $(this)).val();
            var description = $('#infozaic_description', $(this)).val();

           	$('#meta-title').html(title);
           	$('#meta-description').html(description);

           	var alertBox = '<div class="alert alert-success fade in"><a class="close" data-dismiss="alert">×</a>Changes Updated!</div>';
           	$('#edit-modal .modal-body').prepend(alertBox);
		});  


		// add popover for listing infozaics in explore/search page
		$('a[rel=popover]').popover({
	    	placement: "left"
	    })


       
  })
}(window.jQuery)



