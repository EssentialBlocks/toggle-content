/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import { ToggleContentIcon } from "../util/icons";
import Edit from "./edit";
import Save from "./save";
import example from "./example";
import metadata from "./block.json";
import attributes from "./attributes";
import "./style.scss";

const { name, category } = metadata;

registerBlockType(name, {
	title: __("Toggle Content", "essential-blocks"),
	description: __("Toggle Contents or blocks with a beautiful switcher."),
	icon: ToggleContentIcon,
	category,
	attributes,
	edit: Edit,
	save: Save,
	keywords: [
		__("Toggle", "essential-blocks"),
		__("eb Toggle Content", "essential-blocks"),
	],
	supports: {
		align: ["wide", "full"],
	},
	example,
});
