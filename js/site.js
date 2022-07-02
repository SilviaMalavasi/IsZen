(function($) {

/* JS Media Queries */

const mediaQueryAllMobile = window.matchMedia('(max-width: 1024px) and (orientation: portrait)').matches || window.matchMedia('(max-width: 800px)').matches;
const mediaQueryPhonesAndSmallTablets = window.matchMedia('(max-width: 800px)').matches;
const mediaQueryPhones = window.matchMedia('(max-width:600px)').matches;
const vw = window.innerWidth * 0.01;
let vh = window.innerHeight * 0.01;


/* Burger menù */

$('#menuToggle').on('tap click',function(){
	$('#menuToggle').toggleClass('open-menu');
	$('.cont-mob').toggleClass('open-cont');
	$('.site').toggleClass('open-menu');
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


$(function(){

    document.documentElement.style.setProperty('--vh', vh + "px");
    let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

    /* 1rem rounded */

    let onerem = parseInt(rem * 1);
    document.documentElement.style.setProperty('--onerem', onerem + "px");

});

})(jQuery);

