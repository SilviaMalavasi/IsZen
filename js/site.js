(function($) {

	$('#menuToggle').on('tap click',function(){
	  $('#menuToggle').toggleClass('open_menu');
	  $('.cont_mob').toggleClass('open_cont');
	});


	$(document).on('tap click',function(event){
	  if ($('#menuToggle').hasClass('open_menu')) {
	    $(document).on('tap click',function(event){
	      var $target = $(event.target);
	      if(!$target.closest('#menu_mobile .cont_mob').length && !$target.closest('.the_search').length) {
	          $('#menuToggle').toggleClass('open_menu');
	      }; 
	      if ($target.closest('#menuToggle').length) {
	        $('#menuToggle').toggleClass('open_menu');
	      }
	    });
	  };
	});


	$('#menu_mobile li.menu-item-has-children').on("touchstart click", function (e) {
	  var link = $(this);
	  if (link.hasClass('hover')) {
	    link.removeClass('hover');
	 } 
	else {
	   link.addClass('hover');
	   $('ul > li').not(this).removeClass('hover');
	   e.preventDefault();
	   return false;
	  }
	});

})(jQuery);

