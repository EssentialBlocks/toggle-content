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
 * @package         block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
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

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-toggle-content-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-toggle-content-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	if( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/toggle-content' ) ) {
    register_block_type( 'create-block/toggle-content', array(
      'editor_script' => 'create-block-toggle-content-block-editor',
      'editor_style'  => 'create-block-toggle-content-block-editor',
      'style'         => 'create-block-toggle-content-block',
    ) );
  }
}

add_action( 'init', 'create_block_toggle_content_block_init' );
