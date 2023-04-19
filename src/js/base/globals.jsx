// JS Media Queries

export const mediaQueryAllMobile =
  window.matchMedia("(max-width: 1024px) and (orientation: portrait)")
    .matches ||
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
export const mediaQueryPhonesAndSmallTabletsOnly = window.matchMedia(
  "(max-width:767px)"
).matches;
export const mediaQueryBigTabletsOnly = window.matchMedia(
  "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)"
).matches;

// vw and vh

export const vw = window.innerWidth * 0.01;
export const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", vh + "px");

// 1rem rounded

export const rem = parseFloat(
  getComputedStyle(document.documentElement).fontSize
);
export const onerem = parseInt(rem * 1);

export let top_pos_animations = "top 85%";
if (mediaQueryAllMobile) {
  top_pos_animations = "top 90%";
}
