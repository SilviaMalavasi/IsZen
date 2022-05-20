<?php get_header(); ?>
<?php if ( have_posts() ) : ?>
<header class="header">
<h1 class="entry-title"><?php printf( esc_html__( 'Search Results for: %s', 'iszen' ), get_search_query() ); ?></h1>
</header>
<?php while ( have_posts() ) : the_post(); ?>
<?php get_template_part( 'entry' ); ?>
<?php endwhile; ?>
<?php get_template_part( 'nav', 'below' ); ?>
<?php else : ?>
<article id="post-0" class="post no-results not-found">
<header class="header">
<h1 class="entry-title"><?php esc_html_e( 'Nothing Found', 'mirai' ); ?></h1>
</header>
<div class="entry-content">
<h4>Pagina non trovata</h4><p>Prova un'altra ricerca o torna alla <a href="' . <?php site_url() ?> . '">home</a><p>

</div>
</article>
<?php endif; ?>

<?php get_footer(); ?>