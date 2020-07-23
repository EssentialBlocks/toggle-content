<?php
/**
 * Plugin Name: Toggle Content
 * Plugin URI: https://essential-blocks.com
 * Description: Toggle Content block for Gutenberg
 * Author: WPDeveloper
 * Author URI: https://wpdeveloper.net
 * Version: 1.0.1
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: toggle-content 
 *
 * @package toggle-content 
 */


if( ! class_exists('EB_Font_Loader') ) {
	require_once __DIR__ . '/includes/font-loader.php';
}
if( ! class_exists('EB_Post_Meta') ) {
	require_once __DIR__ . '/includes/post-meta.php';
}

function create_block_toggle_content_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "block/toggle-content" block first.'
		);
	}

	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-toggle-content-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-toggle-content-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

  $frontend_js = "src/frontend.js";
   wp_enqueue_script(
    'essential-blocks-toggle-content-frontend',
    plugins_url($frontend_js, __FILE__),
    array( "jquery","wp-editor"),
    true
  );

	if( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/toggle-content' ) ) {
    register_block_type( 'block/toggle-content', array(
      'editor_script' => 'create-block-toggle-content-block-editor',
      'style'         => 'create-block-toggle-content-block',
    ) );
  }
}

add_action( 'init', 'create_block_toggle_content_block_init' );
