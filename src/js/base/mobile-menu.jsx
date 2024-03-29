import $ from "jquery";
import { smoother } from "../base/scrollsmoother.jsx";
import { mediaQueryAllMobile } from "./globals.jsx";

export function mobileMenu() {
  $("#menuToggle").on("tap click", function () {
    $("#mobile-menu").toggleClass("open-menu");

    if (mediaQueryAllMobile) {
      $("body").toggleClass("fixed");
    }

    if (!mediaQueryAllMobile) {
      let scroll_amount = smoother.scrollTop();
      if (smoother.paused()) {
        smoother.paused(false);
        smoother.scrollTop(scroll_amount);
      } else {
        smoother.paused(true);
      }
    }
  });

  $(document).on("tap click", function (event) {
    if ($("#mobile-menu").hasClass("open-menu")) {
      $(document).on("tap click", function (event) {
        var $target = $(event.target);
        if (
          !$target.closest("#mobile-menu .mobile-menu-cont").length &&
          !$target.closest(".menu-item.menu-home").length
        ) {
          $("#mobile-menu").toggleClass("open-menu");
        }
        if ($target.closest("#menuToggle").length) {
          $("#mobile-menu").toggleClass("open-menu");
        }
      });
    }
  });

  $("#mobile-menu li.menu-item-has-children").on("touchstart click", function (
    event
  ) {
    var $target = $(event.target);
    var link = $(this);
    if (!$target.closest("#mobile-menu li.menu-item-has-children li").length) {
      if (link.hasClass("hover")) {
        link.removeClass("hover");
      } else {
        link.addClass("hover");
        $("ul > li").not(this).removeClass("hover");
        event.preventDefault();
        return false;
      }
    }
  });
}
