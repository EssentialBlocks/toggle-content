<?php

/**
 * Plugin Name: Toggle Content
 * Plugin URI: https://essential-blocks.com
 * Description: Toggle Content block for Gutenberg
 * Author: WPDeveloper
 * Author URI: https://wpdeveloper.net
 * Version: 1.1.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: toggle-content 
 *
 * @package toggle-content 
 */


require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';


function create_block_toggle_content_block_init()
{
	$dir = dirname(__FILE__);

	$script_asset_path = "$dir/build/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "toggle-content/toggle-content" block first.'
		);
	}

	$index_js = 'build/index.js';
	wp_register_script(
		'create-block-toggle-content-block-editor',
		plugins_url($index_js, __FILE__),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-block-editor',
		),
		filemtime("$dir/$index_js")
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-toggle-content-block',
		plugins_url($style_css, __FILE__),
		array(),
		filemtime("$dir/$style_css")
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-toggle-content-block-editor',
		plugins_url($editor_css, __FILE__),
		array('create-block-toggle-content-block'),
		filemtime("$dir/$editor_css")
	);


	$frontend_js = "build/frontend.js";
	wp_register_script(
		'essential-blocks-toggle-content-frontend',
		plugins_url($frontend_js, __FILE__),
		array(),
		filemtime("$dir/$frontend_js"),
		true
	);

	if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/toggle-content')) {
		register_block_type('toggle-content/toggle-content', array(
			'editor_script' => 'create-block-toggle-content-block-editor',
			'editor_style' 	=> 'create-block-toggle-content-block-editor',
			'render_callback' => function ($attributes, $content) {
				if (!is_admin()) {
					wp_enqueue_style('create-block-toggle-content-block');
					wp_enqueue_script('essential-blocks-toggle-content-frontend');
				}
				return $content;
			}
		));
	}
}

add_action('init', 'create_block_toggle_content_block_init');
