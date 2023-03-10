<?php /* Template Name: Template per documenti legali */ ?>

<?php get_header(); ?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article id="post-<?php the_ID(); ?>" class="plain-page" <?php post_class(); ?>>
<header class="header">
<h1 class="entry-title"><?php the_title(); ?></h1>
</header>
<div class="entry-content">
<?php the_content(); ?>
</div>
</article>
<?php endwhile; endif; ?>

<?php get_footer(); ?>