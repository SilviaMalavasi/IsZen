<?php

/* Setup */

$theme = wp_get_theme();
define('theme_version', $theme->Version);

add_action( 'after_setup_theme', 'iszen_init' );
function iszen_init() {
    load_theme_textdomain( 'iszen', get_template_directory() . '/languages' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'block-templates' );
    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 1568, 9999 );
    add_theme_support( 'title-tag' );
    add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'style', 'script' ) );
    global $content_width;
    if ( ! isset( $content_width ) ) { $content_width = 1920; }
}


/* Scripts and styles */

add_action( 'wp_enqueue_scripts', 'iszen_scripts' );
function iszen_scripts() {
    wp_enqueue_script( 'jquery' );
     wp_enqueue_style( 'iszen-style', get_stylesheet_directory_uri() . '/style.css', array(), filemtime( get_stylesheet_directory() . '/style.css' ), false );
    wp_enqueue_script( 'iszen-script', get_stylesheet_directory_uri() . '/dist/site.js', array( 'jquery' ), filemtime(get_stylesheet_directory() . '/dist/site.js'), true);

    /* Production
	wp_enqueue_style( 'iszen-style', get_stylesheet_directory_uri() . '/style.css', array(), '1.0.0', false );
    wp_enqueue_script( 'iszen-script', get_stylesheet_directory_uri() . '/dist/site.js', array( 'jquery' ), '1.0.0', true );
    */
}


/* Dashboard style */

add_action('admin_head', 'iszen_dashboard_style'); 
function iszen_dashboard_style() {
    wp_enqueue_style( 'iszen_dashboard_style', get_stylesheet_directory_uri() . '/style-dashboard.css' );
}

/* Menù */

add_action( 'init', 'iszen_register_menus' );
function iszen_register_menus() {
  register_nav_menus(
    array(
      'main-menu' => __( 'Main Menu' ),
    )
  );
}


/* Add search to menu */

add_filter('wp_nav_menu_items', 'iszen_add_search_form', 10, 2);
function iszen_add_search_form($items, $args) {
if( $args->theme_location == 'main-menu' )
        $items .= '<li class="search"><form role="search" method="get" id="searchform" action="'.home_url( '/' ).'"><input type="text" value="cerca nel sito" name="s" id="s" /><input type="submit" id="searchsubmit" value="'. esc_attr__('Search') .'" /></form></li>';
        return $items;
}


/* Add slug to body_class() */

add_filter('body_class', 'add_slug_class');
function add_slug_class($classes) {
    $additional = 'page-slug-'.get_post_field( 'post_name', get_post() );
    foreach ($classes as $class) {
        array_push($classes , $additional);
        break;
    }
    return $classes;
}



// Optional

/* Better read more/excerpt more */

add_filter( 'the_content_more_link', 'iszen_read_more' );
function iszen_read_more() {
    if ( ! is_admin() ) {
    return ' <a href="' . esc_url( get_permalink() ) . '" class="more-link">    &nbsp;&#62;</a>';
    }
}

add_filter( 'excerpt_more', 'iszen_excerpt_more' );
function iszen_excerpt_more( $more ) {
    if ( ! is_admin() ) {
    global $post;
    return ' <a href="' . esc_url( get_permalink( $post->ID ) ) . '" class="more-link">    &nbsp;&#62;</a>';
    }
}


/* Widgets */

add_action( 'widgets_init', 'iszen_widgets_init' );
function iszen_widgets_init() {
    register_sidebar( array (
    'name' => __( 'Sidebar Widget Area', 'iszen' ),
    'id' => 'primary-widget-area',
    'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
    'after_widget' => "</li>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
}

add_action( 'comment_form_before', 'iszen_nested_comment' );
function iszen_nested_comment() {
    if ( get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
    }
}