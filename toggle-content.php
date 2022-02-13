<?php

/**
 * Plugin Name: Toggle Content
 * Plugin URI: https://essential-blocks.com
 * Description: Toggle Content block for Gutenberg
 * Author: WPDeveloper
 * Author URI: https://wpdeveloper.net
 * Version: 1.2.1
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: toggle-content
 *
 * @package toggle-content
 */


/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */


define('TOGGLE_CONTENT_VERSION', "1.2.1");
define('TOGGLE_CONTENT_ADMIN_URL', plugin_dir_url(__FILE__));
define('TOGGLE_CONTENT_ADMIN_PATH', dirname(__FILE__));

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_toggle_content_block_init()
{

	$script_asset_path = TOGGLE_CONTENT_ADMIN_PATH . "/dist/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "toggle-content/toggle-content" block first.'
		);
	}
	$script_asset = require($script_asset_path);
	$all_dependencies = array_merge($script_asset['dependencies'], array(
		'wp-blocks',
		'wp-i18n',
		'wp-element',
		'wp-block-editor',
		'toggle-content-controls-util',
	));

	$index_js     = TOGGLE_CONTENT_ADMIN_URL . 'dist/index.js';
	wp_register_script(
		'create-block-toggle-content-block-editor',
		$index_js,
		$all_dependencies,
		$script_asset['version'],
		true
	);

	$style_css     = TOGGLE_CONTENT_ADMIN_URL . 'dist/style.css';
	wp_register_style(
		'create-block-toggle-content-block-editor',
		$style_css,
		array(),
		TOGGLE_CONTENT_VERSION,
		"all"
	);


	$frontend_js = TOGGLE_CONTENT_ADMIN_URL . 'dist/frontend/index.js';
	wp_register_script(
		'essential-blocks-toggle-content-frontend',
		$frontend_js,
		array(),
		TOGGLE_CONTENT_VERSION,
		true
	);


	//
	//
	//
	$controls_dependencies = require TOGGLE_CONTENT_ADMIN_PATH . '/dist/controls.asset.php';

	wp_register_script(
		"toggle-content-controls-util",
		TOGGLE_CONTENT_ADMIN_URL . '/dist/controls.js',
		array_merge($controls_dependencies['dependencies'], array("essential-blocks-edit-post")),
		$controls_dependencies['version'],
		true
	);

	wp_localize_script('toggle-content-controls-util', 'EssentialBlocksLocalize', array(
		'eb_wp_version' => (float) get_bloginfo('version'),
		'rest_rootURL' => get_rest_url(),
	));

	wp_register_style(
		'toggle-content-editor-css',
		TOGGLE_CONTENT_ADMIN_URL . '/dist/controls.css',
		array(
			"create-block-toggle-content-block-editor"
		),
		$controls_dependencies['version'],
		'all'
	);

	if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/countdown')) {
		register_block_type(
			Countdown_Helper::get_block_register_path("toggle-content/toggle-content", TOGGLE_CONTENT_ADMIN_PATH),
			array(
				'editor_script'	=> 'create-block-toggle-content-block-editor',
				'editor_style' 	=> 'toggle-content-editor-css',
				'render_callback' => function ($attributes, $content) {
					if (!is_admin()) {
						wp_enqueue_script('essential-blocks-toggle-content-frontend');
						wp_enqueue_style('create-block-toggle-content-block-editor');
					}
					return $content;
				}
			)
		);
	}
}

add_action('init', 'create_block_toggle_content_block_init');
