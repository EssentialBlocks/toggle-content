<?php
/**
 * Load google fonts.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class EB_Font_Loader
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

        add_action('wp_enqueue_scripts', array($this, 'fonts_loader'));
        add_action('admin_enqueue_scripts', array($this, 'fonts_loader'));
    }

    /**
     * Load fonts.
     *
     * @access public
     */
    public function fonts_loader()
    {
        global $post;

        if ($post && isset($post->ID)) {

            $fonts = get_post_meta($post->ID, '_eb_attr', true);

            if (!empty($fonts)) {

                $fonts = array_unique(explode(',', $fonts));

                $system = array(
                    'Arial',
                    'Tahoma',
                    'Verdana',
                    'Helvetica',
                    'Times New Roman',
                    'Trebuchet MS',
                    'Georgia',
                );

                $gfonts = '';

                $gfonts_attr = ':100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic';

                foreach ($fonts as $font) {
                    if (!in_array($font, $system, true) && !empty($font)) {
                        $gfonts .= str_replace(' ', '+', trim($font)) . $gfonts_attr . '|';
                    }
                }

                if (!empty($gfonts)) {
                    $query_args = array(
                        'family' => $gfonts,
                    );

                    wp_register_style(
                        'eb-block-fonts',
                        add_query_arg($query_args, '//fonts.googleapis.com/css'),
                        array()
                    );

                    wp_enqueue_style('eb-block-fonts');
                }

                // Reset.
                $gfonts = '';
            }
        }
    }
}
EB_Font_Loader::register();