<?php

/**
 * Load google fonts.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Toggle_Content_Helper
{


    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * The Constructor.
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueues'));
    }

    /**
     * Load fonts.
     *
     * @access public
     */
    public function enqueues()
    {
        global $pagenow;

        /**
         * Only for admin add/edit pages/posts
         */
        $query_string = isset($_SERVER['QUERY_STRING'])
            ? sanitize_text_field(wp_unslash($_SERVER['QUERY_STRING']))
            : '';

        if ($pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php' || ($pagenow == 'themes.php' && !empty($query_string) && str_contains($query_string, 'gutenberg-edit-site'))) {

            $controls_asset_path = TOGGLE_CONTENT_ADMIN_PATH . '/dist/modules.asset.php';
            if (!file_exists($controls_asset_path)) {
                return;
            }

            // `require`, not `include_once`: a second `*_once` include returns bool,
            // which would make the array offsets below fatal on PHP 8.
            $controls_dependencies = require $controls_asset_path;
            if (!is_array($controls_dependencies)) {
                $controls_dependencies = array();
            }
            $controls_deps    = isset($controls_dependencies['dependencies']) && is_array($controls_dependencies['dependencies'])
                ? $controls_dependencies['dependencies']
                : array();
            $controls_version = isset($controls_dependencies['version'])
                ? $controls_dependencies['version']
                : TOGGLE_CONTENT_VERSION;

            wp_register_script(
                "toggle-content-controls-util",
                TOGGLE_CONTENT_ADMIN_URL . 'dist/modules.js',
                $controls_deps,
                $controls_version,
                true
            );

            /**
             * Keys consumed by the bundled controls (dist/modules.js).
             *
             * `responsiveBreakpoints` is read by StyleComponent to wrap the editor
             * preview styles in media queries. When it is missing the queries become
             * `max-width: undefinedpx`, which is invalid CSS, so the whole tablet and
             * mobile block is dropped and responsive settings look like they do
             * nothing in the editor.
             *
             * The values must match the breakpoints the style-handler hardcodes when
             * it builds the frontend stylesheet, otherwise the editor preview and the
             * frontend disagree about where a breakpoint starts.
             */
            wp_localize_script('toggle-content-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => (float) get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
                'fontAwesome' => "true",
                'googleFont' => "true",
                'responsiveBreakpoints' => array(
                    'tablet' => 1024,
                    'mobile' => 767,
                ),
            ));

            if ($pagenow == 'post-new.php' || $pagenow == 'post.php') {
                wp_localize_script('toggle-content-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-post'
                ));
            } else if ($pagenow == 'site-editor.php' || $pagenow == 'themes.php') {
                wp_localize_script('toggle-content-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-site'
                ));
            }

            wp_enqueue_style(
                'toggle-content-editor-css',
                TOGGLE_CONTENT_ADMIN_URL . 'dist/modules.css',
                array(),
                $controls_version,
                'all'
            );
        }
    }

    public static function get_block_register_path($blockname, $blockPath)
    {
        // Unreachable below WP 6.0 (declared floor); kept as a defensive fallback.
        if ((float) get_bloginfo('version') <= 5.6) {
            return $blockname;
        } else {
            return $blockPath;
        }
    }
}
Toggle_Content_Helper::register();
