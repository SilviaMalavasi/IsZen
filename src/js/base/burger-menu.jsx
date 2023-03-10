export function burgerMenu() {
(function($) {

$('#menuToggle').on('tap click',function(){
    $('#distort').toggleClass('open-menu');
    $('#menuToggle').toggleClass('open-menu');
    $('.cont-mob').toggleClass('open-cont');
    $('.site').toggleClass('open-menu');
  });
  
  
  $(document).on('tap click',function(event){
    if ($('#menuToggle').hasClass('open-menu')) {
      $(document).on('tap click',function(event){
      var $target = $(event.target);
      if(!$target.closest('#burger-menu .cont-mob').length && !$target.closest('.menu-item.menu-home').length) {
        $('#menuToggle').toggleClass('open-menu');
      }; 
      if ($target.closest('#menuToggle').length) {
        $('#menuToggle').toggleClass('open-menu');
      }
    });
    };
  }); 
})(jQuery);
}
