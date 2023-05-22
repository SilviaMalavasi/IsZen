export async function doScrollSmoother() {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  const { ScrollSmoother } = await import("gsap/ScrollSmoother");

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const smoother = ScrollSmoother.create({
    smooth: 1,
  });
  return smoother;
}

/* Per recuperare lo smoother

import { doScrollSmoother } from "./scrollsmoother.jsx";

doScrollSmoother().then((smoother) => {
  console.log(smoother);
}); */
