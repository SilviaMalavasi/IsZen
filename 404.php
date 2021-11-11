<?php get_header(); ?>
<article id="post-0" class="post not-found">
<header class="header">
<h1 class="entry-title"><?php esc_html_e( 'Not Found', 'genuino' ); ?></h1>
</header>
<div class="entry-content">
<?php $page = get_page_by_title('404');
	  $content = apply_filters('the_content', $page->post_content);
if ($content) {
	echo $content;
}
else {
	echo '<p>'.esc_html_e( 'Nothing found for the requested page. Try a search instead?', 'genuino' ).'</p>'.get_search_form();
}
?>
</div>
</article>

<?php get_footer(); ?>