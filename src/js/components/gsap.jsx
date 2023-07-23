import {
  mediaQueryAllMobile,
  rem,
  top_pos_animations,
} from "../base/globals.jsx";
import $ from "jquery";

export function gsapAnimations() {
  async function loadGsap() {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    const { TextPlugin } = await import("gsap/TextPlugin");

    gsap.registerPlugin(ScrollTrigger);

    // Fade in

    if ($(".fade-in").length) {
      const fade_ins = gsap.utils.toArray(".fade-in");
      fade_ins.forEach((fade_in) => {
        let this_height = $(fade_in).outerHeight();
        $(fade_in).css("height", this_height);

        const fade_in_anim = gsap.to(fade_in, {
          opacity: 1,
          duration: 1,
          paused: true,
        });

        ScrollTrigger.create({
          trigger: fade_in,
          start: top_pos_animations,
          onEnter: () => fade_in_anim.play(),
        });

        ScrollTrigger.create({
          trigger: fade_in,
          start: "top bottom",
          onEnterBack: () => fade_in_anim.restart(),
          onLeaveBack: () => fade_in_anim.pause(0),
        });

        if (fade_in.getBoundingClientRect().top < window.innerHeight) {
          fade_in_anim.play();
        }
      });
    }

    // Fade in up

    if ($(".fade-in-up").length) {
      const fade_in_ups = gsap.utils.toArray(".fade-in-up");
      fade_in_ups.forEach((fade_in_up) => {
        let this_height = $(fade_in_up).outerHeight();
        $(fade_in_up).css("height", this_height);

        var hasChildAnimation = $(fade_in_up).hasClass("child-animation");
        var fade_in_up_anim_child;

        if (!mediaQueryAllMobile) {
          if (hasChildAnimation) {
            let fade_in_up_child = $(fade_in_up).find("img");
            fade_in_up_anim_child = gsap.to(fade_in_up_child[0], {
              scale: "1",
              duration: 1.5,
            });
          }
        }

        const fade_in_up_anim_parent = gsap.to(fade_in_up, {
          y: "0",
          opacity: "1",
          duration: 1.5,
        });

        const fade_in_up_anim = gsap.timeline({ paused: true });
        fade_in_up_anim.add(fade_in_up_anim_parent);

        if (!mediaQueryAllMobile) {
          if (hasChildAnimation) {
            fade_in_up_anim.add(fade_in_up_anim_child, "<");
          }
        }

        ScrollTrigger.create({
          trigger: fade_in_up,
          start: "top bottom+=" + 14 * rem + "px",
          onEnter: () => fade_in_up_anim.play(),
          onLeave: () => fade_in_up_anim.pause(0),
        });

        ScrollTrigger.create({
          trigger: fade_in_up,
          start: `top bottom+=${14 * rem}px`,
          onEnterBack: () => fade_in_up_anim.restart(),
          onLeaveBack: () => fade_in_up_anim.pause(0),
        });

        if (fade_in_up.getBoundingClientRect().top < window.innerHeight) {
          fade_in_up_anim.play();
        }
      });
    }

    // Fade in left

    if ($(".fade-in-left").length) {
      const fade_in_lefts = gsap.utils.toArray(".fade-in-left");
      fade_in_lefts.forEach((fade_in_left) => {
        let this_height = $(fade_in_left).outerHeight();
        $(fade_in_left).css("height", this_height);

        var hasChildAnimation = $(fade_in_left).hasClass("child-animation");
        var fade_in_left_anim_child;

        if (!mediaQueryAllMobile) {
          if (hasChildAnimation) {
            let fade_in_left_child = $(fade_in_left).find("img");
            fade_in_left_anim_child = gsap.to(fade_in_left_child[0], {
              scale: "1",
              duration: 1.5,
            });
          }
        }

        const fade_in_left_anim_parent = gsap.to(fade_in_left, {
          x: "0",
          opacity: 1,
          duration: 1.5,
        });

        const fade_in_left_anim = gsap.timeline({ paused: true });
        fade_in_left_anim.add(fade_in_left_anim_parent);

        if (!mediaQueryAllMobile) {
          if (hasChildAnimation) {
            fade_in_left_anim.add(fade_in_left_anim_child, "<");
          }
        }

        ScrollTrigger.create({
          trigger: fade_in_left,
          start: top_pos_animations,
          onEnter: () => fade_in_left_anim.play(),
        });

        ScrollTrigger.create({
          trigger: fade_in_left,
          start: "top bottom",
          onEnterBack: () => fade_in_left_anim.restart(),
          onLeaveBack: () => fade_in_left_anim.pause(0),
        });

        if (
          $(fade_in_left)[0].getBoundingClientRect().top < window.innerHeight
        ) {
          fade_in_left_anim.play();
        }
      });
    }

    // Fade in right

    if ($(".fade-in-right").length) {
      const fade_in_rights = gsap.utils.toArray(".fade-in-right");
      fade_in_rights.forEach((fade_in_right) => {
        let this_height = $(fade_in_right).outerHeight();
        $(fade_in_right).css("height", this_height);

        var hasChildAnimation = $(fade_in_right).hasClass("child-animation");
        var fade_in_right_anim_child;

        if (!mediaQueryAllMobile) {
          if (hasChildAnimation) {
            let fade_in_right_child = $(fade_in_right).find("img");
            fade_in_right_anim_child = gsap.to(fade_in_right_child[0], {
              scale: "1",
              duration: 1.5,
            });
          }
        }

        const fade_in_right_anim_parent = gsap.to(fade_in_right, {
          x: "0",
          opacity: 1,
          duration: 1.5,
        });

        const fade_in_right_anim = gsap.timeline({ paused: true });
        fade_in_right_anim.add(fade_in_right_anim_parent);

        if (!mediaQueryAllMobile) {
          if (hasChildAnimation) {
            fade_in_right_anim.add(fade_in_right_anim_child, "<");
          }
        }

        ScrollTrigger.create({
          trigger: fade_in_right,
          start: top_pos_animations,
          onEnter: () => fade_in_right_anim.play(),
        });

        ScrollTrigger.create({
          trigger: fade_in_right,
          start: "top bottom",
          onEnterBack: () => fade_in_right_anim.restart(),
          onLeaveBack: () => fade_in_right_anim.pause(0),
        });

        if (
          $(fade_in_right)[0].getBoundingClientRect().top < window.innerHeight
        ) {
          fade_in_right_anim.play();
        }
      });
    }

    // Fade in stagger

    if ($(".fade-in-stagger-cont").length) {
      $(".fade-in-stagger-cont").each(function () {
        const fade_in_stagger = $(this);
        const fade_in_this_stagger = $(this).find(".fade-in-stagger");

        let this_height = $(fade_in_this_stagger).outerHeight();
        $(fade_in_this_stagger).css("height", this_height);

        const fade_in_stagger_anim = gsap.to(fade_in_this_stagger, {
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
          stagger: {
            from: 0,
            amount: 0.5,
          },
        });

        fade_in_stagger_anim.pause(0);

        ScrollTrigger.create({
          trigger: fade_in_stagger,
          start: "top 70%",
          onEnter: () => fade_in_stagger_anim.play(),
          onLeave: () => fade_in_stagger_anim.pause(0),
        });

        ScrollTrigger.create({
          trigger: fade_in_stagger,
          start: "top bottom",
          onEnterBack: () => fade_in_stagger_anim.restart(),
          onLeaveBack: () => fade_in_stagger_anim.pause(0),
        });

        if ($(this)[0].getBoundingClientRect().top < window.innerHeight) {
          fade_in_stagger_anim.play();
        }
      });
    }

    // Fade in right stagger

    if ($(".fade-in-right-stagger-cont").length) {
      $(".fade-in-right-stagger-cont").each(function () {
        const fade_in_right_stagger = $(this);
        const fade_in_right_this_stagger = $(this).find(
          ".fade-in-right-stagger"
        );

        let this_height = $(fade_in_right_this_stagger).outerHeight();
        $(fade_in_right_this_stagger).css("height", this_height);

        const fade_in_right_stagger_anim = gsap.to(fade_in_right_this_stagger, {
          duration: 1,
          opacity: 1,
          x: 0,
          ease: "power1.inOut",
          stagger: {
            from: 0,
            amount: 0.5,
          },
        });

        fade_in_right_stagger_anim.pause(0);

        ScrollTrigger.create({
          trigger: fade_in_right_stagger,
          start: "top 70%",
          onEnter: () => fade_in_right_stagger_anim.play(),
          onLeave: () => fade_in_right_stagger_anim.pause(0),
        });

        ScrollTrigger.create({
          trigger: fade_in_right_stagger,
          start: "top bottom",
          onEnterBack: () => fade_in_right_stagger_anim.restart(),
          onLeaveBack: () => fade_in_right_stagger_anim.pause(0),
        });

        if ($(this)[0].getBoundingClientRect().top < window.innerHeight) {
          fade_in_right_stagger_anim.play();
        }
      });
    }

    // Fade in left stagger

    if ($(".fade-in-left-stagger-cont").length) {
      $(".fade-in-left-stagger-cont").each(function () {
        const fade_in_left_stagger = $(this);
        const fade_in_left_this_stagger = $(this).find(".fade-in-left-stagger");

        let this_height = $(fade_in_left_this_stagger).outerHeight();
        $(fade_in_left_this_stagger).css("height", this_height);

        const fade_in_left_stagger_anim = gsap.to(fade_in_left_this_stagger, {
          duration: 1,
          opacity: 1,
          x: 0,
          ease: "power1.inOut",
          stagger: {
            from: 0,
            amount: 0.5,
          },
        });

        fade_in_left_stagger_anim.pause(0);

        ScrollTrigger.create({
          trigger: fade_in_left_stagger,
          start: "top 70%",
          onEnter: () => fade_in_left_stagger_anim.play(),
          onLeave: () => fade_in_left_stagger_anim.pause(0),
        });

        ScrollTrigger.create({
          trigger: fade_in_left_stagger,
          start: "top bottom",
          onEnterBack: () => fade_in_left_stagger_anim.restart(),
          onLeaveBack: () => fade_in_left_stagger_anim.pause(0),
        });

        if ($(this)[0].getBoundingClientRect().top < window.innerHeight) {
          fade_in_left_stagger_anim.play();
        }
      });
    }

    // Fade in up stagger

    if ($(".fade-in-up-stagger-cont").length) {
      $(".fade-in-up-stagger-cont").each(function () {
        const fade_in_up_stagger = $(this);
        const fade_in_up_this_stagger = $(this).find(".fade-in-up-stagger");

        let this_height = $(fade_in_up_this_stagger).outerHeight();
        $(fade_in_up_this_stagger).css("height", this_height);

        const fade_in_up_stagger_anim = gsap.to(fade_in_up_this_stagger, {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power1.inOut",
          stagger: {
            from: 0,
            amount: 0.5,
          },
        });

        fade_in_up_stagger_anim.pause(0);

        ScrollTrigger.create({
          trigger: fade_in_up_stagger,
          start: "top 90%",
          onEnter: () => fade_in_up_stagger_anim.play(),
          onLeave: () => fade_in_up_stagger_anim.pause(0),
        });

        ScrollTrigger.create({
          trigger: fade_in_up_stagger,
          start: "top bottom",
          onEnterBack: () => fade_in_up_stagger_anim.restart(),
          onLeaveBack: () => fade_in_up_stagger_anim.pause(0),
        });

        if ($(this)[0].getBoundingClientRect().top < window.innerHeight) {
          fade_in_up_stagger_anim.play();
        }
      });
    }

    // GSAP Numeri

    gsap.registerPlugin(TextPlugin);

    if ($(".blocco-numeri").length) {
      const numeri_anim = gsap.from(".blocco-numeri .numero", {
        textContent: 0,
        duration: 1,
        snap: { textContent: 1 },
        stagger: {
          from: 0,
          amount: 0.5,
        },
      });

      numeri_anim.pause(0);

      ScrollTrigger.create({
        trigger: ".blocco-numeri",
        start: "top 70%",
        onEnter: () => numeri_anim.play(),
      });

      ScrollTrigger.create({
        trigger: ".blocco-numeri",
        start: "top bottom",
        onEnterBack: () => numeri_anim.restart(),
        onLeaveBack: () => numeri_anim.pause(0),
      });
    }

    // Colore menu

    if ($(".fondo-scuro").length) {
      const scuri = gsap.utils.toArray(".fondo-scuro");
      scuri.forEach((scuro) => {
        ScrollTrigger.create({
          trigger: scuro,
          start: "top " + 5 * rem + "px",
          end: "bottom " + 5 * rem + "px",
          onEnter: () => $(".header-menu").addClass("menu-bianco"),
          onLeave: () => $(".header-menu").removeClass("menu-bianco"),
          onEnterBack: () => $(".header-menu").addClass("menu-bianco"),
          onLeaveBack: () => $(".header-menu").removeClass("menu-bianco"),
        });

        if (scuro.getBoundingClientRect().top < window.innerHeight) {
          $(".header-menu").addClass("menu-bianco");
        }
      });
    }
  }

  loadGsap();
}
