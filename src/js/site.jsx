import $ from "jquery";

import { doScrollSmoother } from "./base/scrollsmoother.jsx";
import { removeAltOnHover } from "./base/remove-alt-on-hover.jsx";
import { mobileMenu } from "./base/mobile-menu.jsx";

import { scrollToTarget, scrollToTop } from "./components/scroll-to.jsx";
import { gsapAnimations } from "./components/gsap.jsx";
import { mediaQueryAllMobile } from "./base/globals.jsx";

if (!mediaQueryAllMobile) {
  doScrollSmoother();
}
scrollToTop();
scrollToTarget();
mobileMenu();

// Apri document ready

$(function () {
  if (
    $(".fade-in").length ||
    $(".fade-in-up").length ||
    $(".fade-in-left").length ||
    $(".fade-in-right").length ||
    $(".fade-in-right-stagger-cont").length ||
    $(".fade-in-up-stagger-cont").length ||
    $(".fade-in-left-stagger-cont").length ||
    $(".blocco-numeri").length
  ) {
    gsapAnimations();
  }

  removeAltOnHover();
}); // Chiudi document ready
