# Toggle Content — PHP / WordPress Compatibility Pass

**Plugin:** Toggle Content (`toggle-content`)
**Version:** 1.2.8 → 1.3.0
**Branch:** `toggle-content-dev` (branched off `latest`, not `master` — see note below)
**Date of pass:** 2026-08-10
**Nothing committed or pushed.** All changes are left in the working tree.

> **Branch note:** the skill's default is to branch off `master`, but `master` is
> missing commit `d04c239` ("Fixed: compatibility support with wordpress 6.5
> version") which exists only on `latest`. Branching off `master` would have
> silently dropped that fix, so `toggle-content-dev` was cut from `latest`
> instead. `master` and `latest` have diverged and should be reconciled
> separately.

---

## 1. Detected original PHP / WordPress baseline

### PHP — detected original: **5.6-era**

| Evidence | File:line | Implies |
|---|---|---|
| `[]` short array syntax throughout | `includes/font-loader.php:15` | 5.4+ |
| Closure as `render_callback` | `toggle-content.php:101` | 5.3+ |
| `...$args` variadics, `new static( ...$args )` | `includes/font-loader.php:21-23` | 5.6+ |
| No `??`, no `<=>`, no return types, no typed properties, no arrow fns anywhere | (absence) | ceiling below 7.0 |

No 7.x-only or 8.x-only *syntax* is present anywhere in the plugin's own code.
The highest construct in use is the 5.6 variadic. **Detected original PHP = 5.6.**

One contradiction worth recording: `str_contains()` is called at
`includes/helpers.php:49` and `lib/style-handler/includes/class-parse-css.php:225`.
That is a PHP 8.0 function. On PHP < 8.0 it only exists because **WordPress core
polyfills it from WP 5.9 onward** (`wp-includes/compat.php`). So the plugin as
shipped was already silently dependent on WP ≥ 5.9 when running on PHP 7.x —
despite `readme.txt` declaring `Requires at least: 5.6`.

### WordPress — detected original: **5.6 declared / 5.8+ actually required**

| Evidence | File:line | Implies |
|---|---|---|
| `register_block_type( <path> )` path form via `get_block_register_path()` | `toggle-content.php:96`, `includes/helpers.php:87-94` | 5.8+ |
| `site-editor.php` / `gutenberg-edit-site` handling | `includes/helpers.php:49` | 5.9+ |
| `str_contains()` relying on core polyfill | `includes/helpers.php:49` | 5.9+ |
| Explicit `<= 5.6` fallback branch to the block-name registration form | `includes/helpers.php:89` | authored against 5.6 |
| `resolve_block_template()`, `wp_is_block_theme()` (submodule) | `lib/style-handler/style-handler.php:73, 219` | 5.8+ / 5.9+ |
| `rest_after_save_widget` (submodule) | `lib/style-handler/style-handler.php:45` | 5.8+ |
| `block.json` `apiVersion: 2` | `block.json` | 5.6+ |

**Detected original WP = 5.6 (intent) but the code in practice needs 5.9+.**

### Declared values found (before this pass)

| Field | Main plugin file | `readme.txt` |
|---|---|---|
| `Requires at least` | **absent** | `5.6` |
| `Tested up to` | **absent** | `6.5` |
| `Requires PHP` | **absent** | **absent** |
| `Stable tag` | n/a | `1.2.8` |

They disagreed with the code: `readme.txt` claimed WP 5.6 while the code needed
5.9+, and no PHP floor was declared at all in either place.

---

## 2. Chosen floor — detected original vs. policy minimum

| | Detected original | Policy minimum | **Winner** |
|---|---|---|---|
| PHP | 5.6 | **7.4** | **7.4** (policy) |
| WordPress | 5.6 (really 5.9) | **6.0** | **6.0** (policy) |

The policy minimum won on both axes. The user did **not** request a lower floor
for this plugin, so the standard PHP 7.4 / WP 6.0 default applies.

Practical consequence: with WP 6.0 as the floor, the `str_contains()` polyfill is
guaranteed present, so those two call sites are safe as written and needed no
shim.

---

## 3. Target range

**PHP 7.4 → 8.5** and **WordPress 6.0 → 7.0**, inclusive.

Latest stable, verified live on **2026-08-10**:

- **PHP 8.5.9** — `https://www.php.net/releases/index.php?json&max=3`
  (`supported_versions`: 8.2, 8.3, 8.4, 8.5)
- **WordPress 7.0.3** — `https://api.wordpress.org/core/version-check/1.7/`

Per-version checklist covered by this pass:

- PHP: 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5
- WordPress: 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7.0

Local verification toolchain: PHP 8.5.8 CLI.

---

## 4. Audit findings

Severity: **Critical** = fatal / white screen · **High** = breaks a feature or
throws on a supported version · **Medium** = warning/deprecation notice ·
**Low** = hygiene.

### 4a. Plugin's own code

| # | File:line | Issue | Breaks on | Severity |
|---|---|---|---|---|
| 1 | `toggle-content.php:31` | `require_once` of `lib/style-handler/style-handler.php` with no `file_exists()` guard. The path is a git submodule; in the checkout audited it was **uninitialised and empty**, so the plugin fataled on load. | All versions | **Critical** |
| 2 | `toggle-content.php:37` | `throw new Error(...)` from inside an `init` callback when `dist/index.asset.php` is missing. An uncaught `Error` on `init` is a site-wide white screen, not a plugin-local failure. | All versions | **Critical** |
| 3 | `includes/helpers.php:51` | `$controls_dependencies = include_once …/modules.asset.php;` — `include_once` returns `bool true` on a second include, not the array. `true['dependencies']` is *"Trying to access array offset on value of type bool"* (warning 7.4/8.x) and yields `null` deps. | 7.4+ (warning), worsens 8.0+ | **High** |
| 4 | `includes/helpers.php:51` | No `file_exists()` check before including the asset file; a missing build fatals. | All versions | **High** |
| 5 | `includes/helpers.php:56,81` | `$controls_dependencies['dependencies']` / `['version']` read without `isset()`. Undefined-array-key is a **warning** from PHP 8.0 (was notice in 7.4). | 8.0+ | Medium |
| 6 | `includes/helpers.php:49` | `$_SERVER['QUERY_STRING']` read without `isset()`, `wp_unslash()` or sanitisation. | All versions | Medium |
| 7 | `includes/post-meta.php:12` | `add_filter('init', …)` used to register an action. Works (actions are filters internally) but is wrong and trips WPCS. | All versions | Low |
| 8 | `includes/font-loader.php:52` | `$block['blockName']` read without `isset()`; `render_block` can pass blocks where the key is absent/null. Undefined-key warning. | 8.0+ | Medium |
| 9 | `includes/font-loader.php:70` | `$googleFontFamily[$attributes[$key]] = …` — a `null` or non-scalar attribute value produces an illegal array key. | 8.0+ | Medium |
| 10 | `includes/font-loader.php:67` | `preg_grep()` result used in `foreach` without checking for `false`/empty. | 8.0+ | Low |
| 11 | `includes/font-loader.php:16` | `private static $block_name = [];` declared as array but only ever assigned a string. | — | Low |
| 12 | `toggle-content.php` (header) | No `Requires PHP`, no `Requires at least`, no `Tested up to`. WordPress cannot gate installation, and wordpress.org shows no compatibility data from the main file. | All versions | **High** |
| 13 | `readme.txt:4-6` | `Requires at least: 5.6` was false (code needs 5.9+); `Tested up to: 6.5` was ~5 majors stale against WP 7.0; no `Requires PHP` at all. | All versions | **High** |
| 14 | `toggle-content.php:1` | Missing `if ( ! defined( 'ABSPATH' ) ) exit;` guard (the only PHP file in the plugin lacking one). | All versions | Low |
| 15 | `includes/helpers.php:62,89` | `(float) get_bloginfo('version')` — float cast of a version string. See §7 (flagged, not changed). | Latent | Medium |
| 16 | `toggle-content.php:95` | Registration guarded on `is_registered('essential-blocks/countdown')` — wrong block name. See §7. | All versions | **High** |
| 17 | `assets/js/eb-animation-load.js:27` | `DOMNodeInserted` mutation event — deprecated, and **removed from Chromium 127+**. Admin-preview path only. See §7. | Browser, not PHP/WP | Medium |

### 4b. Shipped submodule `lib/style-handler/` — **audited, not modified** (per decision, §6)

This submodule is not in `.distignore`, so it **ships to end users** and is in
scope for the audit. It is a separate git repository shared with Essential Blocks
and sibling plugins, so no edits were made here.

| # | File:line | Issue | Breaks on | Severity |
|---|---|---|---|---|
| S1 | `style-handler.php:441-442` | `ESSENTIAL_BLOCKS_DIR_PATH` used with no `defined()` guard. In PHP 7.4 an undefined constant degraded to its own name plus a notice; **since PHP 8.0 it is a fatal `Error: Undefined constant`.** Reached via the `eb_after_save_responsiveBreakpoints_settings` hook. | **8.0+** | **Critical** |
| S2 | `style-handler.php:3, 452, 461` | `use EssentialBlocks\Integrations\AssetGeneration;` + `AssetGeneration::remove_directory_files()`. That class does not exist unless Essential Blocks is active → `Error: Class not found`. No `class_exists()` guard. | All versions | **High** |
| S3 | `style-handler.php:172` | `in_array( 'gp-premium/gp-premium.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) )` — if the option is missing/corrupt, `get_option()` returns `false` and **`in_array()` throws `TypeError` on PHP 8.0+** (was a warning on 7.4). | **8.0+** | **High** |
| S4 | `class-parse-css.php:33` | `array_key_exists( 'responsiveBreakpoints', $settings )` where `$settings = get_option('eb_settings', [])` may be a string/`false`. **`TypeError` on PHP 8.0+.** | **8.0+** | **High** |
| S5 | `class-parse-css.php:49` | `return $settingsData[ $size ];` with no key check — undefined-key warning, returns `null`, and emits broken CSS (`@media(max-width: px)`). | 8.0+ | Medium |
| S6 | `style-handler.php:443-449` | `$breakpoints['tablet'] - 1` etc. after `json_decode()` that can return `null`. Null array access + arithmetic on `null`. | 8.0+ | Medium |
| S7 | `class-parse-css.php:171,175,180,184` | `preg_replace( '/\s+/', ' ', $style )` where `$style` can be `null` (values merged into `self::$_block_styles`). **Passing `null` to a non-nullable internal string param is deprecated in PHP 8.1.** | **8.1+** | Medium |
| S8 | `class-parse-css.php:203-207` | `get_between_data()` — `stripos()` can return `false`, which is then passed as the `int $offset` of `substr()`. Deprecated bool→int coercion path on 8.1+. Function appears unused in this plugin. | 8.1+ | Low |
| S9 | `class-parse-css.php:57, 84` | `count( $block )` / `count( $item["innerBlocks"] )` on values not guaranteed `array\|Countable`. **`TypeError` since PHP 8.0** (was a warning in 7.2-7.4). | **8.0+** | Medium |
| S10 | `style-handler.php:80, 87-94` | `$post = get_post( $post_id ); … $post->post_content` with no null check — *"Attempt to read property on null"* warning. | 8.0+ | Medium |
| S11 | `style-handler.php:319` | `$post->post_type === "wp_template_part" \|\| $post->post_type === "wp_template" && ! empty( $block_styles )` — `&&` binds tighter than `\|\|`, so the `! empty()` guard only applies to the second comparison. Pre-existing logic bug, not version-related. | — | Medium |
| S12 | `style-handler.php:353, 366, 400, 470` | `mkdir()` / `file_put_contents()` used directly instead of `wp_mkdir_p()` / `WP_Filesystem`, with return values unchecked. | — | Low |
| S13 | `style-handler.php:180, 190, 197, 202` | `substr( md5( microtime( true ) ), 0, 10 )` as the stylesheet `$ver` — defeats browser and page caching on every request. Behavioural, not a compat break. | — | Low |

### Clean — checked and found nothing

- No `mysql_*`, `create_function()`, `each()`, `ereg*`, `split()`, `money_format()`,
  `strftime()`, `utf8_encode/decode`, `FILTER_SANITIZE_STRING`, or `${var}`
  string interpolation anywhere.
- No curly-brace string/array offsets (`$s{0}`).
- No implicit-nullable parameters (`function f( int $x = null )`) — the PHP 8.4
  deprecation does not apply.
- No dynamic property creation on undeclared class properties — the PHP 8.2
  deprecation does not apply.
- No `ArrayAccess` / `Iterator` / `JsonSerializable` implementations, so no
  `#[\ReturnTypeWillChange]` is needed.
- No `$wpdb` usage in the plugin's own code. The single submodule query
  (`style-handler.php:424`) **is** correctly `$wpdb->prepare()`d.
- No REST route registration → the WP 5.5 `permission_callback` requirement does
  not apply. `register_meta()` at `post-meta.php:20` **does** supply an
  `auth_callback`.
- No `load_plugin_textdomain()` call at all, so the WP 6.7 "text domain loaded
  too early" notice cannot trigger.
- No jQuery in the plugin — `assets/js/eb-animation-load.js` and `src/frontend.js`
  are vanilla DOM. None of the jQuery 3.x / Migrate removals (`.live()`,
  `.size()`, `.andSelf()`, `$.browser`, `$.parseJSON`, `$.trim`, `.load()` /
  `.unload()` / `.error()` shorthands) appear.
- All four generated `*.asset.php` files parse cleanly and return well-formed
  arrays.
- All global classes are prefixed (`Toggle_Content_Helper`, `Toggle_Font_Loader`,
  `Toggle_Post_Meta`); submodule classes are prefixed **and** wrapped in
  `class_exists()`. All constants are `TOGGLE_CONTENT_*`. No redeclare risk.

---

## 5. Dead version-check branches (floor raise 5.6 → 6.0)

Full sweep for `version_compare`, `PHP_VERSION_ID`, `PHP_VERSION`, `$wp_version`,
`get_bloginfo('version')`, `phpversion()`, `is_php_version_compatible()`,
`is_wp_version_compatible()`, `*_MIN_PHP` constants, and admin-notice bail-out
guards found exactly **two** version checks in the entire plugin, both in
`includes/helpers.php`. Only one is a branch.

| File | Line | Condition | What the branch does | Single remaining reachable path if removed | **Decision** |
|---|---|---|---|---|---|
| `includes/helpers.php` | 89 | `(float) get_bloginfo('version') <= 5.6` | Returns the bare block **name** (`"toggle-content/toggle-content"`) so `register_block_type()` uses the pre-5.8 name form instead of the `block.json` path form. | `get_block_register_path()` collapses to `return $blockPath;` — i.e. `register_block_type()` is always called with `TOGGLE_CONTENT_ADMIN_PATH`, the WP 5.8+ path form. | **Keep as-is, add explanatory comment** ✅ applied |
| `includes/helpers.php` | 62 | `(float) get_bloginfo('version')` | Not a branch — passes the WP version to JS as `EssentialBlocksLocalize.eb_wp_version`. | n/a | Left unchanged — see §7 |

The user chose to keep the line 89 branch intact as a defensive fallback. A
comment marking it unreachable under the declared floor was added; no logic
changed.

---

## 6. Fixes applied

Mapped 1:1 to the audit numbering in §4a.

| Issue | Fix | File |
|---|---|---|
| 1 | Wrapped the style-handler `require_once` in `file_exists()`, with a comment explaining the submodule can be uninitialised. Missing submodule now degrades to "no generated styles" instead of a fatal. | `toggle-content.php:34-40` |
| 2 | Replaced `throw new Error(...)` with an early `return` plus an `admin_notices` callback (`toggle_content_missing_build_notice()`), capability-gated on `activate_plugins` and escaped with `esc_html__()`. | `toggle-content.php:47-50, 128-140` |
| 3 | `include_once` → `require` for `dist/modules.asset.php`, with an inline comment recording *why* (`*_once` returns `bool` on re-include). | `includes/helpers.php:57-59` |
| 4 | Added a `file_exists()` guard on the asset path with an early `return`. | `includes/helpers.php:52-55` |
| 5 | Introduced `$controls_deps` / `$controls_version` locals with `isset()` + `is_array()` checks and sane fallbacks (`array()` / `TOGGLE_CONTENT_VERSION`). Also removed the pointless single-argument `array_merge()`. | `includes/helpers.php:60-67, 76, 96` |
| 6 | `$_SERVER['QUERY_STRING']` now goes through `isset()` → `wp_unslash()` → `sanitize_text_field()` into a `$query_string` local before use. | `includes/helpers.php:44-46, 48` |
| 7 | `add_filter('init', …)` → `add_action('init', …)`. | `includes/post-meta.php:12` |
| 8 | `$block['attrs']` now also `is_array()`-checked; `$block['blockName']` read via an `isset()`-guarded `$block_name` local. | `includes/font-loader.php:51-53` |
| 9 | `get_fonts_family()` skips entries whose value is unset, non-string, or empty before using it as an array key. | `includes/font-loader.php:76-81` |
| 10 | `get_fonts_family()` returns early when `$attributes` is not a non-empty array, and again when `preg_grep()` yields nothing. | `includes/font-loader.php:67-74` |
| 11 | `private static $block_name = [];` → `= '';` to match its actual usage. | `includes/font-loader.php:16` |
| 12 | Added `Requires at least: 6.0`, `Tested up to: 7.0`, `Requires PHP: 7.4` to the main plugin header. | `toggle-content.php:13-15` |
| 13 | `readme.txt`: `Requires at least` 5.6 → 6.0, `Tested up to` 6.5 → 7.0, added `Requires PHP: 7.4`, `Stable tag` 1.2.8 → 1.3.0, added a 1.3.0 changelog entry. | `readme.txt:4-7, 90-94` |
| 14 | Added the `ABSPATH` guard. | `toggle-content.php:19-22` |
| §5 | Added the "unreachable below WP 6.0" comment above the dead branch, per decision. | `includes/helpers.php:89` |

**Version bump 1.2.8 → 1.3.0 (minor), kept in sync across all four locations:**
plugin header `Version:`, `define( 'TOGGLE_CONTENT_VERSION', … )`, `readme.txt`
`Stable tag`, and `package.json` `"version"`. (`composer.json` does not exist in
this plugin.)

**No feature, option name, hook name, block markup, saved attribute, or public
API was changed.** The only behavioural deltas are in previously-fatal paths
(missing submodule, missing build output), which now fail soft.

---

## 7. Flagged, deliberately NOT auto-fixed

### 7a. `(float) get_bloginfo('version')` — `includes/helpers.php:62` — **do not "fix" naively**

The obvious correction is to send the version as a string. **That would break
every Essential Blocks sibling plugin.** The consumer is in the shared `controls`
submodule:

```js
// controls/src/helpers/index.js:196,218
const { eb_wp_version, all_blocks } = EssentialBlocksLocalize;
…
if (eb_wp_version >= 5.8) {
    registerBlockType({ name, ...metadata }, settings);   // WP 5.8+ form
} else {
    registerBlockType(`${name}`, { ...omit(metadata, ["name"]), ...settings });
}
```

A numeric `>=` comparison is being done on the value, so changing the PHP side to
a string changes JS semantics across the whole EB block family.

The float cast is genuinely lossy — `(float) "6.10"` is `6.1`, and `(float)
"7.0.3"` is `7.0` — but it only *misbehaves* if a version straddles the `5.8`
boundary after truncation. Under the WP 6.0 declared floor, `eb_wp_version` is
always ≥ 6.0, so the `>= 5.8` test is now permanently true and the `else` arm is
dead. **Harmless today, correct to leave alone.**

**Recommendation:** fix this in the `controls` submodule first — switch the JS to
a proper version comparison and pass the raw version string from PHP — then
update all EB plugins together. Not a single-plugin change.

### 7b. Registration guard checks the wrong block — `toggle-content.php:95` — **user decision: flag only**

```php
if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/countdown' ) ) {
```

It tests for the **countdown** block, then conditionally registers
**toggle-content**. If Essential Blocks is active and has registered countdown,
this plugin silently does not register its own block — every existing Toggle
Content block on the site would render as "block not found" unless EB happens to
provide an equivalent.

Almost certainly copy-paste from a sibling plugin. The likely intent was
`essential-blocks/toggle-content`.

**Recommendation:** change to `essential-blocks/toggle-content`, but verify
first that Essential Blocks actually registers a block under that exact name —
if it does not, the guard becomes a no-op and the two plugins may both register
a toggle-content block. Left unchanged pending that verification.

### 7c. `lib/style-handler/` submodule — **user decision: flag only**

Findings S1-S13 in §4b are real, and S1/S3/S4/S9 are hard PHP 8.0+ breaks in code
that **ships to end users**. They were not fixed because the submodule is a
separate repository shared across Essential Blocks and its sibling plugins;
edits there would not land on the `toggle-content-dev` branch and would need
their own review and release.

Recommended patches, smallest-first:

```php
// S1 — style-handler.php:441
if ( defined( 'ESSENTIAL_BLOCKS_DIR_PATH' ) && file_exists( ESSENTIAL_BLOCKS_DIR_PATH . '/dist/style.css' ) ) {

// S2 — style-handler.php:452, 461
if ( class_exists( '\EssentialBlocks\Integrations\AssetGeneration' ) ) {
    AssetGeneration::remove_directory_files( $this->eb_style_dir );
}

// S3 — style-handler.php:172
$active_plugins = (array) apply_filters( 'active_plugins', get_option( 'active_plugins', [] ) );
if ( in_array( 'gp-premium/gp-premium.php', $active_plugins, true ) ) {

// S4 — class-parse-css.php:30-33
$settings = get_option( 'eb_settings', [] );
if ( ! is_array( $settings ) ) { $settings = []; }
if ( array_key_exists( 'responsiveBreakpoints', $settings ) ) {

// S5 — class-parse-css.php:49
return isset( $settingsData[ $size ] ) ? $settingsData[ $size ] : ( 'tablet' === $size ? 1024 : 767 );

// S7 — class-parse-css.php:171 et al
$css .= preg_replace( '/\s+/', ' ', (string) $style );

// S9 — class-parse-css.php:57, 84
if ( is_array( $block ) && count( $block ) > 0 ) {
```

S11 (the `&&` / `||` precedence bug) is a genuine logic defect, not a version
issue — worth a separate ticket regardless of this compatibility pass.

### 7d. `DOMNodeInserted` — `assets/js/eb-animation-load.js:27`

Deprecated DOM Mutation Event, **removed in Chromium 127+ (2024)**. The listener
is now dead in Chrome and Edge. It only drives live re-application of animation
classes when the animation-style `<select>` changes in the block editor preview,
so the failure is a stale editor preview, not broken frontend output.

**Recommendation:** replace with `MutationObserver`. Left alone because it is a
browser-API concern rather than a PHP/WP range issue, and rewriting the observer
logic touches editor-preview behaviour.

### 7e. Missing `$ver` on the Google Fonts stylesheet — `includes/font-loader.php:103-107`

`wp_register_style()` is called with no `$ver`, so WordPress appends the **core**
version (`?ver=7.0.3`) to the `fonts.googleapis.com` URL. Passing an explicit
version would change the emitted markup, so it was left alone. Cosmetic.

### 7f. `wp_localize_script()` used for plain data — `includes/helpers.php:61, 68, 72`

`wp_localize_script()` is being used to pass configuration objects rather than
translation strings. `wp_add_inline_script()` is the modern idiom, but switching
changes the emitted `<script>` output and the global's initialisation timing, and
the `controls` submodule reads these globals. Flagged only; still fully supported
on WP 7.0.

---

## 8. Old-vs-new conflicts

**None that could not be reconciled.** Raising the floor to WP 6.0 actually
*removed* the one latent conflict: `str_contains()` at `includes/helpers.php:49`
and `class-parse-css.php:225` is a PHP 8.0 function that the plugin was calling
unconditionally. On the old declared floor (WP 5.6 + PHP 5.6) that was a fatal
`Call to undefined function`. With WP 6.0 as the floor, core's `compat.php`
polyfill (present since WP 5.9) is guaranteed, so the calls are safe on PHP 7.4
through 8.5 with no shim added.

---

## 9. Final declared compatibility range

| Field | `toggle-content.php` | `readme.txt` |
|---|---|---|
| `Requires at least` | `6.0` | `6.0` |
| `Tested up to` | `7.0` | `7.0` |
| `Requires PHP` | `7.4` | `7.4` |
| `Version` / `Stable tag` | `1.3.0` | `1.3.0` |

Also synced: `define( 'TOGGLE_CONTENT_VERSION', "1.3.0" )` and `package.json`
`"version": "1.3.0"`.

**Verified range: PHP 7.4 → 8.5, WordPress 6.0 → 7.0.**

---

## 10. Verification performed

- **`php -l` on every modified file** — clean.
- **Full lint sweep**, PHP 8.5.8 CLI:
  ```
  find . -name '*.php' -not -path './node_modules/*' -print0 | xargs -0 -n1 php -l
  ```
  All 10 PHP files pass with **no syntax errors**: `toggle-content.php`,
  `includes/font-loader.php`, `includes/helpers.php`, `includes/post-meta.php`,
  `lib/style-handler/style-handler.php`,
  `lib/style-handler/includes/class-parse-css.php`, and the four generated
  `dist/**/*.asset.php` files.
- **`phpcs`** — not installed on this machine (`phpcs -i` → not found). Skipped;
  no global tooling was installed.
- **Submodules** — `lib/style-handler` and `controls` were uninitialised and were
  fetched (`git submodule update --init --recursive`) so their shipped PHP could
  be audited. Both are at their recorded commits: `34fb2c61` and `807ed39e`.
- **Not verified:** no runtime testing against live WordPress installs across the
  6.0-7.0 range was performed. Findings are from static analysis and the version
  histories.

---

## Open items awaiting your decision

1. **§7b** — the `essential-blocks/countdown` registration guard. Needs someone
   to confirm whether Essential Blocks registers `essential-blocks/toggle-content`
   before the guard can safely be corrected.
2. **§7c** — the four hard PHP 8.0+ breaks in `lib/style-handler` (S1, S3, S4,
   S9). Ship to users today; need their own PR against the style-handler repo.
3. **§7a** — `eb_wp_version` float cast: cross-plugin fix, should start in the
   `controls` submodule.
4. **§7d** — `DOMNodeInserted` → `MutationObserver` in the animation loader.
5. **Branch divergence** — `master` is missing `d04c239`; `master` and `latest`
   need reconciling independently of this pass.
