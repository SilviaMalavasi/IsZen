import $ from "jquery";

export async function iubendaObserver() {
  if ($(".video-iframe").length) {
    const { playVimeo } = await import("./play-vimeo.jsx");

    $(".video-iframe").each(function () {
      let target = $(this)[0];

      var observer = new MutationObserver(function (mutations) {
        playVimeo(target);
      });

      observer.observe(target, {
        attributes: true,
        childList: true,
        characterData: true,
      });

      setTimeout(function () {
        observer.disconnect;
      }, 10000);
    });
  }
}
