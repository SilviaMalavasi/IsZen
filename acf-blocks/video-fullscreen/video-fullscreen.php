<?php

echo
'
<section class="video-fullscreen">';
$video = get_field('video_fullscreen_desktop');
$video_num = substr($video, strpos($video, "com/") + 4);

$request = wp_remote_get('https://vimeo.com/api/oembed.json?url=https://vimeo.com/' . $video_num . '?width=1920&height=1080');
$response = wp_remote_retrieve_body($request);
$video_array = json_decode($response, true);

if ($video_array) {
  $thumb_url = $video_array['thumbnail_url'] . '.jpg';
  $video_width = $video_array['width'];
  $video_height = $video_array['height'];
  echo '
  <div class="video-desktop">
    <div class="video-thumb" style="background-image:url(' . $thumb_url . ')"></div>';
};
echo '
    <figure class="video-iframe video-autoplay"';
if ($video_array) {
  echo '
    data-width="' . $video_width . '" data-height="' . $video_height . '" style="padding-top:' . $video_height / $video_width * 100 . '%"';
}
echo '
    >
      <iframe title="video" src="https://player.vimeo.com/video/' . $video_num . '?&controls=1&title=0&loop=true&dnt=1" allow="autoplay" frameborder="0"></iframe>
    </figure>
  </div>';

$video_mobile = get_field('video_fullscreen_mobile');

if ($video_mobile)
  $video_num_mobile = substr($video_mobile, strpos($video_mobile, "com/") + 4);

$request_mobile = wp_remote_get('https://vimeo.com/api/oembed.json?url=https://vimeo.com/' . $video_num_mobile . '?width=1920&height=1080');
$response_mobile = wp_remote_retrieve_body($request_mobile);
$video_array_mobile = json_decode($response_mobile, true);

if ($video_array_mobile) {
  $thumb_url_mobile = $video_array_mobile['thumbnail_url'] . '.jpg';
  $video_width_mobile = $video_array_mobile['width'];
  $video_height_mobile = $video_array_mobile['height'];
  echo '
  <div class="video-mobile">
    <div class="video-thumb" style="background-image:url(' . $thumb_url_mobile . ')"></div>';
};
echo '
    <figure class="video-iframe video-autoplay video-mobile"';

if ($video_array) {
  echo '
    data-width="' . $video_width_mobile . '" data-height="' . $video_height_mobile . '" style="padding-top:' . $video_height_mobile / $video_width_mobile * 100 . '%"';
}
echo '
    >
      <iframe title="video" src="https://player.vimeo.com/video/' . $video_num_mobile . '?&controls=1&title=0&loop=true&dnt=1" allow="autoplay" frameborder="0"></iframe>
    </figure>
  </div>
</section>';
