<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="preload" href="<?php echo get_stylesheet_directory_uri(); ?>/fonts/Roboto-Regular.woff2" as="font" type="font/woff2" crossorigin>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'iszen' ); ?></a>

	<header id="header">

		<nav role="navigation" id="burger-menu">
			<div id="menuToggle">
				<div class="top-line"></div>
				<div class="medium-line"></div>
				<div class="bottom-line"></div>
		  	</div>
		  	<div class="cont-mob">
				<li class="menu-item menu-home">
					<a href="<?php echo site_url(); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/logo.png"></a>
				</li>
				<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
			</div>
		</nav>

		<nav id="menu">
			<li class="menu-item menu-home">
				<a href="<?php echo site_url(); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/logo.png"></a>
			</li>
			<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
		</nav>

	</header>

	<div id="content" class="site-content">
		<div id="primary" class="content-area">
			<main id="main" class="site-main" role="main">
