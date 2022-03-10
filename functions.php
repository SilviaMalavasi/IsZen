<?php

/* Setup */

$theme = wp_get_theme();
define('theme_version', $theme->Version);

function iszen_init() {
	load_theme_textdomain( 'iszen', get_template_directory() . '/languages' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 1568, 9999 );
	add_theme_support( 'title-tag' );
	add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'style', 'script' ) );
	global $content_width;
	if ( ! isset( $content_width ) ) { $content_width = 1920; }
}
add_action( 'after_setup_theme', 'iszen_init' );


/* Scripts and styles */

function iszen_scripts() {
	wp_enqueue_script( 'jquery' );

	wp_enqueue_style( 'iszen-style', get_stylesheet_directory_uri() . '/style.css', array(), filemtime( get_stylesheet_directory() . '/style.css' ), false );
	wp_enqueue_script( 'iszen-script', get_stylesheet_directory_uri() . '/js/site.js', array(), filemtime(get_stylesheet_directory() . '/js/site.js'), true);
}
add_action( 'wp_enqueue_scripts', 'iszen_scripts' );


/* Dashboard style */

function iszen_dashboard_style() {
	wp_enqueue_style( 'iszen_dashboard_style', get_template_directory_uri() . '/style_dashboard.css' );
}

add_action('admin_head', 'iszen_dashboard_style'); 



/* Menù */

function iszen_register_menus() {
  register_nav_menus(
    array(
      'main-menu' => __( 'Main Menu' ),
    )
  );
}
add_action( 'init', 'iszen_register_menus' );

function iszen_add_search_form($items, $args) {
if( $args->theme_location == 'main-menu' )
        $items .= '<li class="search"><form role="search" method="get" id="searchform" action="'.home_url( '/' ).'"><input type="text" value="cerca nel sito" name="s" id="s" /><input type="submit" id="searchsubmit" value="'. esc_attr__('Search') .'" /></form></li>';
        return $items;
}
add_filter('wp_nav_menu_items', 'iszen_add_search_form', 10, 2);



/* Add slug to post_class() */

function add_post_class($classes) {
    $additional = get_post_field( 'post_name', get_post() );
    foreach ($classes as $class) {
        array_push($classes , $additional);
        break;
    }
    return $classes;
}
add_filter('post_class', 'add_post_class');


/* Better read more/excerpt more */

function iszen_read_more() {
	if ( ! is_admin() ) {
	return ' <a href="' . esc_url( get_permalink() ) . '" class="more-link">	&nbsp;&#62;</a>';
	}
}
add_filter( 'the_content_more_link', 'iszen_read_more' );

function iszen_excerpt_more( $more ) {
	if ( ! is_admin() ) {
	global $post;
	return ' <a href="' . esc_url( get_permalink( $post->ID ) ) . '" class="more-link">	&nbsp;&#62;</a>';
	}
}
add_filter( 'excerpt_more', 'iszen_excerpt_more' );



/* Optional */

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
add_action( 'widgets_init', 'iszen_widgets_init' );

function iszen_nested_comment() {
	if ( get_option( 'thread_comments' ) ) {
	wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'comment_form_before', 'iszen_nested_comment' );




