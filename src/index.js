import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";

import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";

registerBlockType("block/toggle-content", {
	title: __("Toggle Content", "block"),
	description: __("", "block"),
	category: "widgets",
	icon,
	attributes,
	edit: Edit,
	save,
});
