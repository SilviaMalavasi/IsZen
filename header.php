<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'iszen' ); ?></a>

		<header id="header">

		<nav role="navigation" id="menu_mobile">
		  <div id="menuToggle">
	    	<span class="burger"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
   				<rect width="100" height="12" rx="8"></rect>
			</svg></span>
	    	<span class="burger"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
   				<rect width="100" height="12" rx="8"></rect>
			</svg></span>
	    	<span class="burger"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
   				<rect width="100" height="12" rx="8"></rect>
			</svg></span>
			<div class="cont_mob">
				<div class="cont_mob_inner">
					<div id="the_search">
						<form action="/" method="get">
						    <input type="image" alt="Search" src="<?php bloginfo( 'template_url' ); ?>/assets/search.svg" />
						    <input type="text" name="s" id="search" placeholder="search... " value="<?php the_search_query(); ?>" />
						</form>
					</div>
					<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
				</div>
			</div>
		  </div>
		</nav>

		<nav id="menu">
			<div id="search"><?php get_search_form(); ?></div>
			<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
		</nav>

	</header>

	<div id="content" class="site-content">
		<div id="primary" class="content-area">
			<main id="main" class="site-main" role="main">
