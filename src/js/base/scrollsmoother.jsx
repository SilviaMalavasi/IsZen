
export function doScrollSmoother() {
(function($) {

  async function loadScrollSmoother() {
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    const { ScrollSmoother } = await import('gsap/ScrollSmoother');

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({});

};

loadScrollSmoother();

})(jQuery);
}