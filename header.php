<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="preload" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/fonts/subset-Lato-Bold.woff2" as="font" type="font/woff2" crossorigin>

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div id="scrollTopBtn">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 43.624 43.624">
    <path d="M21.812,1.5A20.312,20.312,0,1,1,1.5,21.812h0A20.312,20.312,0,0,1,21.812,1.5Z" style="fill:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;"/></svg>
</div>

<div id="smooth-wrapper">
<div id="smooth-content">

<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'iszen' ); ?></a>

    <header id="header">

        <nav role="navigation" id="mobile-menu">
            <div id="menuToggle">
                <div class="top-line"></div>
                <div class="medium-line"></div>
                <div class="bottom-line"></div>
              </div>
              <div class="mobile-menu-cont">
                <div calss="mobile-menu-cont-cont">
                    <div class="menu-home">
                        <a href="<?php echo site_url(); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/logo.png"></a>
                    </div>
                    <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
                </div>
            </div>
        </nav>

        <nav id="menu">
            <div class="menu-home">
                <a href="<?php echo site_url(); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/logo.png"></a>
            </div>
            <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
        </nav>

    </header>

    <div id="content" class="site-content">
        <div id="primary" class="content-area">
            <main id="main" class="site-main" role="main">
