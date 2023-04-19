export function removeAltOnHover() {
  (function ($) {
    $("img, iframe").mouseenter(function () {
      var title = $(this).attr("title");
      $(this).attr("tmp_title", title);
      $(this).attr("title", "");
    });

    $("img, iframe").mouseleave(function () {
      var title = $(this).attr("tmp_title");
      $(this).attr("title", title);
    });
  })(jQuery);
}
