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

	    // tooltip setup
	    $('a[rel=tooltip]').tooltip({
	      placement: "bottom"
	    })

	    $('div[rel=tooltip]').tooltip({
	      placement: "top"
	    })

	    var $modal = $('#edit-modal')

	    $('.modal-btn').click(function(e) {
            e.preventDefault();

            /*
            modalElement.find('.modal-body').load('ajax.php', { item_id: $(this).data('item-id') }, function(){
                modalElement.modal('show');
            });*/
	    	var typeName = $(this).attr('title');
            $('.modal-header h3', $modal).html('Add ' + typeName);
            $('#' + typeName.toLowerCase() + '.modal-type', $modal).show();
        });


        $('#btn-add').click(function(e) {
            e.preventDefault();
            var $newInfobit = $($('#preview', $modal).html());
			$("#canvas").prepend( $newInfobit ).masonry( 'reload' );
			$('#edit-modal').modal('hide');

			// NEED TO RELOAD TOOLTIPS 
        });

		/*  used for when modal first is about to be shown
	    $('#myModal').on('show', function () {
		  
		})*/

		$('#edit-modal').on('hidden', function () {
		  $('.modal-type', $modal).hide();
		})

	
  })
}(window.jQuery)