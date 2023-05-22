import { rem, top_pos_animations } from "../base/globals.jsx";
import $ from "jquery";

export function gsapAnimations() {
  async function loadGsap() {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");

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

        const fade_in_up_anim = gsap.to(fade_in_up, {
          y: "0",
          opacity: "1",
          duration: 1.5,
          paused: true,
        });

        ScrollTrigger.create({
          trigger: fade_in_up,
          start: "top bottom+=" + 8 * rem + "px",
          onEnter: () => fade_in_up_anim.play(),
          onLeave: () => fade_in_up_anim.pause(0),
        });

        ScrollTrigger.create({
          trigger: fade_in_up,
          start: `top bottom+=${8 * rem}px`,
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
      const in_lefts = gsap.utils.toArray(".fade-in-left");
      in_lefts.forEach((in_left) => {
        let this_height = $(in_left).outerHeight();
        $(in_left).css("height", this_height);

        const in_left_anim = gsap.to(in_left, {
          x: "0",
          opacity: 1,
          duration: 1,
          paused: true,
        });

        ScrollTrigger.create({
          trigger: in_left,
          start: top_pos_animations,
          onEnter: () => in_left_anim.play(),
        });

        ScrollTrigger.create({
          trigger: in_left,
          start: "top bottom",
          onEnterBack: () => in_left_anim.restart(),
          onLeaveBack: () => in_left_anim.pause(0),
        });

        if ($(in_left)[0].getBoundingClientRect().top < window.innerHeight) {
          in_left_anim.play();
        }
      });
    }

    // Fade in right

    if ($(".fade-in-right").length) {
      const in_rights = gsap.utils.toArray(".fade-in-right");
      in_rights.forEach((in_right) => {
        let this_height = $(in_right).outerHeight();
        $(in_right).css("height", this_height);

        const in_right_anim = gsap.to(in_right, {
          x: "0",
          opacity: 1,
          duration: 1,
          paused: true,
        });

        ScrollTrigger.create({
          trigger: in_right,
          start: top_pos_animations,
          onEnter: () => in_right_anim.play(),
        });

        ScrollTrigger.create({
          trigger: in_right,
          start: "top bottom",
          onEnterBack: () => in_right_anim.restart(),
          onLeaveBack: () => in_right_anim.pause(0),
        });

        if ($(in_right)[0].getBoundingClientRect().top < window.innerHeight) {
          in_right_anim.play();
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
  }

  loadGsap();
}
