<?php
echo '
<section class="gallery">
  <div class="swiper">
    <div class="swiper-wrapper">';
while (have_rows('gallery')) {
  the_row();
  $immagine = get_sub_field('immagine');
  echo '<div class="swiper-slide">
          <picture>' . wp_get_attachment_image($immagine, "full") . '</picture>
        </div>';
}
echo '
    </div>
  </div>
  <div class="swiper-pagination"></div>
  <div class="swiper-navigation">
    <div class="swiper-prev"></div>
    <div class="swiper-next"></div>
  </div>
</section>';
