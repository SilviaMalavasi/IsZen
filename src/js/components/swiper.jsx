import $ from "jquery";
import swiperCss from "bundle-text:swiper/swiper-bundle.min.css";

export function gallery() {
  async function loadSwiper() {
    const { Swiper: Swiper, Navigation, Pagination } = await import("swiper");

    let container = document.getElementById("main");
    let style = document.createElement("style");
    style.textContent = swiperCss;
    container.appendChild(style);

    $(".swiper").each(function (index, el) {
      $(el).addClass("swiper_" + index);

      window["swiper_name"] = "swiper_" + index;

      var swiper_next = $(this).next()[0];
      var swiper_prev = $(this).next().next()[0];

      const swiper_name = new Swiper($(".swiper_" + index)[0], {
        modules: [Navigation, Pagination],
        speed: 500,
        slidesPerView: 1,
        navigation: {
          nextEl: swiper_next,
          prevEl: swiper_prev,
        },
      });
    });
  }
  loadSwiper();
}
