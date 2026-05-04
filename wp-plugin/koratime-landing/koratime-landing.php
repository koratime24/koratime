<?php
/**
 * Plugin Name: KoraTime24 Landing Page
 * Description: Adds a blank full-page template for the KoraTime24 sports landing page.
 * Version: 1.0
 * Author: KoraTime24
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// Register the custom page template
add_filter( 'theme_page_templates', function( $templates ) {
    $templates['templates/landing.php'] = 'KoraTime24 Landing';
    return $templates;
});

// Load our template file when selected
add_filter( 'template_include', function( $template ) {
    if ( is_page() ) {
        $meta = get_post_meta( get_the_ID(), '_wp_page_template', true );
        if ( $meta === 'templates/landing.php' ) {
            $file = plugin_dir_path( __FILE__ ) . 'templates/landing.php';
            if ( file_exists( $file ) ) {
                return $file;
            }
        }
    }
    return $template;
});
