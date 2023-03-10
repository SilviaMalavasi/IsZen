<?php get_header(); ?>
<article id="post-0" class="post not-found">
<header class="header">
<h1 class="entry-title"><?php esc_html_e( '404', 'bigfive_visual' ); ?></h1>
</header>
<div class="entry-content">
<?php $page = get_page_by_title('404');
if ($page) {
    $content = apply_filters('the_content', $page->post_content);
    echo $content;
}
else {
    echo '<h4>Pagina non trovata</h4><p>Torna alla <a href="' . site_url() . '">home</a><p>';
}
?>
</div>
</article>

<?php get_footer(); ?>