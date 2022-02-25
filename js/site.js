(function($) {

	$('#menuToggle').on('tap click',function(){
	  $('#menuToggle').toggleClass('open-menu');
	  $('.cont-mob').toggleClass('open-cont');
	});


	$(document).on('tap click',function(event){
	  if ($('#menuToggle').hasClass('open-menu')) {
	    $(document).on('tap click',function(event){
	      var $target = $(event.target);
	      if(!$target.closest('#burger-menu .cont-mob').length && !$target.closest('.the_search').length) {
	          $('#menuToggle').toggleClass('open-menu');
	      }; 
	      if ($target.closest('#menuToggle').length) {
	        $('#menuToggle').toggleClass('open-menu');
	      }
	    });
	  };
	});


	$('#burger-menu li.menu-item-has-children').on("touchstart click", function (e) {
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

