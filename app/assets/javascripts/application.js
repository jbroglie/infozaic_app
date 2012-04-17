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


  		/*
		// fix sub nav on scroll
	    var $win = $(window)
	      , $nav = $('.subnav')
	      , navTop = $('.subnav').length && $('.subnav').offset().top - 40
	      , isFixed = 0

	    processScroll()

	    $win.on('scroll', processScroll)

	    function processScroll() {
	      var i, scrollTop = $win.scrollTop()
	      if (scrollTop >= navTop && !isFixed) {
	        isFixed = 1
	        $nav.addClass('subnav-fixed')
	      } else if (scrollTop <= navTop && isFixed) {
	        isFixed = 0
	        $nav.removeClass('subnav-fixed')
	      }
	    }
	    */


	    // fix sub nav on scroll
	    var $win = $(window)
	      , $miniMeta = $('.mini-meta')
	      , metaBottom = $('.meta').offset().top + 100
	      , isFixed = 0

	    processScroll()

	    $win.on('scroll', processScroll)

	    function processScroll() {
	      var i, scrollTop = $win.scrollTop()
	      if (scrollTop >= metaBottom && !isFixed) {
	        isFixed = 1
	        $miniMeta.fadeIn()
	      } else if (scrollTop <= metaBottom && isFixed) {
	        isFixed = 0
	        $miniMeta.fadeOut()
	      }
	    }


	    var $modal = $('#edit-modal')

	    $('.modal-btn').click(function(e) {
            e.preventDefault();

            /*
            modalElement.find('.modal-body').load('ajax.php', { item_id: $(this).data('item-id') }, function(){
                modalElement.modal('show');
            });*/
	    	var typeName = $(this).attr('title');
            $('.modal-header h3', $modal).html('Add ' + typeName);
            $('#' + typeName.toLowerCase() + '.modal-type', $modal).addClass('active');
        });


        $('#btn-add').click(function(e) {
            e.preventDefault();
            var $newInfobit = $($('#preview', $modal).html());
			$("#canvas").prepend( $newInfobit ).masonry( 'reload' );
			$('#edit-modal').modal('hide');

			setupInteractions();
        });

        // generate quote preview
        $('#btn-preview-quote').click(function(e) {
            e.preventDefault();
            var $previewInfobit = $('#preview .infobit');
            var $previewForm = $('#quote .form-add-infobit');

            var quoteAuthor = $('#quote-author', $previewForm).val();
            var quoteContent = $('#quote-content', $previewForm).val();
            var quoteLink = $('#quote-link', $previewForm).val();

            var infobitContent = '<div class="padding">';
            infobitContent += '<p class="lead">' + quoteContent + '</p>';
            infobitContent += '<h5 class="pull-right">' + quoteAuthor + '</h5>';
            infobitContent += '<div class="clear"></div></div>';

            $('.infobit-content', $previewInfobit).html(infobitContent);
            $('.link', $previewInfobit).html('via <a href="' + quoteLink + '">Link</a>');
            
			$('#preview-wrap').show();
        });



        // generate youtube preview
        $('#btn-preview-youtube').click(function(e) {
            e.preventDefault();

            var $previewInfobit = $('#preview .infobit');
            var $previewForm = $('#youtube .form-add-infobit');

            var youtubeLink = $('#youtube-link', $previewForm).val();
            var youtubeID = getYouTubeID(youtubeLink);

            var infobitContent = '<iframe width="380" height="295" src="'
            infobitContent += 'http://www.youtube.com/embed/' + youtubeID + '?wmode=opaque"';
            infobitContent += ' frameborder="0" allowfullscreen></iframe>';


            $('.infobit-content', $previewInfobit).html(infobitContent);
            $('.link', $previewInfobit).html('via <a href="' + youtubeLink + '">YouTube</a>');
            
			$('#preview-wrap').show();

        });


        // generate photo preview
        $('#btn-preview-photo').click(function(e) {
            e.preventDefault();

            var $previewInfobit = $('#preview .infobit');
            var $previewForm = $('#photo .form-add-infobit');

            var photoTitle = $('#photo-title', $previewForm).val();
            var photoDesc = $('#photo-desc', $previewForm).val();
            var photoLink = $('#photo-link', $previewForm).val();

            var infobitContent = '<div class="img-overlay">'
            infobitContent += '<div class="img-overlay-content">';
            infobitContent += '<h1>' + photoTitle + '</h1>';
            infobitContent += '<p>' + photoDesc + '</p></div>';
            infobitContent += '<img src="' + photoLink + '" alt="img" width="580"></div>';

            $('.infobit-content', $previewInfobit).html(infobitContent);
            $('.link', $previewInfobit).html('via <a href="' + photoLink + '">Link</a>');
            
            setupInteractions();
			$('#preview-wrap').show();

        });


        // generate vimeo preview
        $('#btn-preview-vimeo').click(function(e) {
            e.preventDefault();

            var $previewInfobit = $('#preview .infobit');
            var $previewForm = $('#vimeo .form-add-infobit');

            var vimeoLink = $('#vimeo-link', $previewForm).val();
            var vimeoID = getVimeoID(vimeoLink);

            var infobitContent = '<iframe width="380" height="295" src="'
            infobitContent += 'http://player.vimeo.com/video/' + vimeoID + '?byline=0&amp;portrait=0"';
            infobitContent += ' frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>';

            alert("About to inject: " + infobitContent);
            $('.infobit-content', $previewInfobit).html(infobitContent);
            $('.link', $previewInfobit).html('via <a href="' + vimeoLink + '">Vimeo</a>');
            
			$('#preview-wrap').show();
        });



        // generate wikipedia preview
        $('#btn-preview-wikipedia').click(function(e) {
            e.preventDefault();

            var $previewInfobit = $('#preview .infobit');
            var $previewForm = $('#wikipedia .form-add-infobit');

            
            var wikipediaContent = $('#wikipedia-content', $previewForm).val();
            var wikipediaLink = $('#wikipedia-link', $previewForm).val();
            var wikipediaTitle = wikipediaLink; // change me!!!!

            var infobitContent = '<div class="padding">';
            infobitContent += '<h3>' + wikipediaTitle + '</h3>';
            infobitContent += '<p>' + wikipediaContent + '...';
            infobitContent += '<a rel="tooltip" href="#" data-original-title="Reveal more text">more</a></p>';
            infobitContent += '</div>';

            alert("About to inject: " + infobitContent);
            $('.infobit-content', $previewInfobit).html(infobitContent);
            $('.link', $previewInfobit).html('via <a href="' + wikipediaLink + '">Wikipedia</a>');
            
			$('#preview-wrap').show();
        });



        // called when modal box is about to be hidden
		$('#edit-modal').on('hide', function () {
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

		    $('div[rel=tooltip]').tooltip({
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


	
  })
}(window.jQuery)



