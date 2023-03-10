import { rem, vh } from '../base/globals.jsx';

export function scrollToTop() {  
(function($) {

  async function loadscrollToTop() {
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#scrollTopBtn",
      pin: true,
      start: "top " + (100*vh - 5*rem).toFixed(2) + "px",
      endTrigger: "#footer",
      end: "bottom bottom",
      onEnter: () => $('#scrollTopBtn').css('opacity','1'),
      onLeave: () => $('#scrollTopBtn').css('opacity','0'),
      onEnterBack: () => $('#scrollTopBtn').css('opacity','1'),
      onLeaveBack: () => $('#scrollTopBtn').css('opacity','0'),
    });

  }
  loadscrollToTop();


  $('body').on('click', '#scrollTopBtn', function() {
      $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
  });
  $('body').on('click', '.freccia-single img', function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
});

})(jQuery);
}
  
export function scrollToTarget() {  
(function($) {

  $('*[class^="from"], *[class*=" from"]').each(function(){
  
    $(this).on('click', function (event) {
      event.preventDefault();
      var target = '';
      var classList = $(this).attr('class').split(/\s+/);
      $.each(classList, function(index, item) {
        if (item.startsWith('from')) {
          target = item.replace('from-','');

        }
      });

      var to = 'to-' + target;
      $('html, body').animate({
        scrollTop: $("#" + to).offset().top
      }, 1200);
    });

  });
})(jQuery);
}