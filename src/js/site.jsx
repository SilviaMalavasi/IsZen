import $ from "jquery";

import { doScrollSmoother } from "./base/scrollsmoother.jsx";
import { removeAltOnHover } from "./base/remove-alt-on-hover.jsx";
import { mobileMenu } from "./base/mobile-menu.jsx";

import { scrollToTarget, scrollToTop } from "./components/scroll-to.jsx";
import { gsapAnimations } from "./components/gsap.jsx";
import { mediaQueryAllMobile } from "./base/globals.jsx";
import { iubendaObserver } from "./components/iubenda-observer.jsx";

if (!mediaQueryAllMobile) {
  doScrollSmoother();
}
scrollToTop();
scrollToTarget();
mobileMenu();

if (!mediaQueryAllMobile) {
  window.onresize = function () {
    location.reload();
  };
}

// Apri document ready

$(function () {
  if ($(".video-iframe").length) {
    iubendaObserver();
  }
  removeAltOnHover();
}); // Chiudi document ready

document.addEventListener("DOMContentLoaded", function (event) {
  window.onload = function () {
    if (
      $(".fade-in").length ||
      $(".fade-in-up").length ||
      $(".fade-in-left").length ||
      $(".fade-in-right").length ||
      $(".fade-in-right-stagger-cont").length ||
      $(".fade-in-up-stagger-cont").length ||
      $(".fade-in-left-stagger-cont").length ||
      $(".blocco-numeri").length ||
      $(".fondo-scuro").length
    ) {
      gsapAnimations();
    }
  };
});
