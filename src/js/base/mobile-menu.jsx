export function mobileMenu() {
(function($) {

$('#menuToggle').on('tap click',function(){
    $('#mobile-menu').toggleClass('open-menu');
  });
    
  $(document).on('tap click',function(event){
    if ($('#mobile-menu').hasClass('open-menu')) {
      $(document).on('tap click',function(event){
      var $target = $(event.target);
      if(!$target.closest('#mobile-menu .mobile-menu-cont').length && !$target.closest('.menu-item.menu-home').length) {
        $('#mobile-menu').toggleClass('open-menu');
      }; 
      if ($target.closest('#menuToggle').length) {
        $('#mobile-menu').toggleClass('open-menu');
      }
    });
    };
  }); 

})(jQuery);
}
