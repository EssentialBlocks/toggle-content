<?php

/**
 * Plugin Name: Toggle Content
 * Plugin URI: https://essential-blocks.com
 * Description: Toggle Content block for Gutenberg
 * Author: WPDeveloper
 * Author URI: https://wpdeveloper.net
 * Version: 1.5.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: toggle-content
 * Requires at least: 6.0
 * Tested up to: 7.0
 * Requires PHP: 7.4
 *
 * @package toggle-content
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

define( 'TOGGLE_CONTENT_VERSION', "1.5.0" );
define( 'TOGGLE_CONTENT_ADMIN_URL', plugin_dir_url( __FILE__ ) );
define( 'TOGGLE_CONTENT_ADMIN_PATH', dirname( __FILE__ ) );

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/helpers.php';

/**
 * The style-handler is shipped as a git submodule. Guard the include so an
 * uninitialised submodule degrades to "no generated styles" instead of a fatal.
 */
if ( file_exists( __DIR__ . '/lib/style-handler/style-handler.php' ) ) {
    require_once __DIR__ . '/lib/style-handler/style-handler.php';
}

function create_block_toggle_content_block_init() {

    $script_asset_path = TOGGLE_CONTENT_ADMIN_PATH . "/dist/index.asset.php";
    if ( ! file_exists( $script_asset_path ) ) {
        // Missing build output must not fatal the whole site on `init`.
        add_action( 'admin_notices', 'toggle_content_missing_build_notice' );
        return;
    }
    $script_asset = require $script_asset_path;
    if ( ! is_array( $script_asset ) || ! isset( $script_asset['dependencies'] ) || ! is_array( $script_asset['dependencies'] ) ) {
        $script_asset = [
            'dependencies' => [],
            'version'      => TOGGLE_CONTENT_VERSION
        ];
    }
    $all_dependencies = array_merge( $script_asset['dependencies'], [
        'wp-blocks',
        'wp-i18n',
        'wp-element',
        'wp-block-editor',
        'toggle-content-controls-util',
        'essential-blocks-eb-animation'
    ] );

    $index_js = TOGGLE_CONTENT_ADMIN_URL . 'dist/index.js';
    wp_register_script(
        'create-block-toggle-content-block-editor',
        $index_js,
        $all_dependencies,
        $script_asset['version'],
        true
    );

    $load_animation_js = TOGGLE_CONTENT_ADMIN_URL . 'assets/js/eb-animation-load.js';
    wp_register_script(
        'essential-blocks-eb-animation',
        $load_animation_js,
        [],
        TOGGLE_CONTENT_VERSION,
        true
    );

    $animate_css = TOGGLE_CONTENT_ADMIN_URL . 'assets/css/animate.min.css';
    wp_register_style(
        'essential-blocks-animation',
        $animate_css,
        [],
        TOGGLE_CONTENT_VERSION
    );

    $style_css = TOGGLE_CONTENT_ADMIN_URL . 'dist/style.css';
    wp_register_style(
        'create-block-toggle-content-block-editor-css',
        $style_css,
        [ 'essential-blocks-animation' ],
        TOGGLE_CONTENT_VERSION,
        "all"
    );

    $frontend_js = TOGGLE_CONTENT_ADMIN_URL . 'dist/frontend/index.js';
    wp_register_script(
        'essential-blocks-toggle-content-frontend',
        $frontend_js,
        [ 'essential-blocks-eb-animation' ],
        TOGGLE_CONTENT_VERSION,
        true
    );

    if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/countdown' ) ) {
        register_block_type(
            Toggle_Content_Helper::get_block_register_path( "toggle-content/toggle-content", TOGGLE_CONTENT_ADMIN_PATH ),
            [
                'editor_script'   => 'create-block-toggle-content-block-editor',
                'editor_style'    => 'create-block-toggle-content-block-editor-css',
                'render_callback' => function ( $attributes, $content ) {
                    if ( ! is_admin() ) {
                        wp_enqueue_script( 'essential-blocks-toggle-content-frontend' );
                        wp_enqueue_style( 'create-block-toggle-content-block-editor-css' );
                    }
                    return $content;
                }
            ]
        );
    }
}

add_action( 'init', 'create_block_toggle_content_block_init', 99 );

/**
 * Admin notice shown when the block build output is missing.
 */
function toggle_content_missing_build_notice() {
    if ( ! current_user_can( 'activate_plugins' ) ) {
        return;
    }
    printf(
        '<div class="notice notice-error"><p>%s</p></div>',
        esc_html__( 'Toggle Content: build output is missing. Run `npm install && npm run build` in the plugin directory.', 'toggle-content' )
    );
}
