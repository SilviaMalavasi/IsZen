export async function doScrollSmoother() {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  const { ScrollSmoother } = await import("gsap/ScrollSmoother");

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollSmoother.create({
    smooth: 1,
  });
}
