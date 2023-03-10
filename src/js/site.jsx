import { doScrollSmoother } from './base/scrollsmoother.jsx';
import { removeAltOnHover } from './base/remove-alt-on-hover.jsx';
import { burgerMenu } from './base/burger-menu.jsx';

import { scrollToTarget, scrollToTop } from './components/scroll-to.jsx';
import { gsapAnimations } from './components/gsap.jsx';

(function($) {
 
  doScrollSmoother();
  scrollToTop();
  scrollToTarget();
  burgerMenu();
   
  // Apri document ready
    
  $(function(){

    if($('.fade-in').length || $('.fade-in-up').length || $('.fade-in-left').length || $('.fade-in-right').length) {
      gsapAnimations();
    };

    removeAltOnHover();
  
  }); // Chiudi document ready
  
  
  })(jQuery);
    
    