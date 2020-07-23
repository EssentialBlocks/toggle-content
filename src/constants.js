const { __ } = wp.i18n;

export const DEFAULT_TEMPLATE = [
	["core/paragraph", {}],
	["core/paragraph", {}],
];

export const INITIAL_CONTENT = [
	{ label: __("Primary"), value: "primary" },
	{ label: __("Secondary"), value: "secondary" },
];

export const SWITCH_STYLES = [
	{ label: __("Rectangle"), value: "rectangle" },
	{ label: __("Rounded"), value: "rounded" },
	{ label: __("Text"), value: "text" },
	{ label: __("Toggle"), value: "toggle" },
];

export const SEPERATOR_TYPE = [
	{ label: __("None"), value: "none" },
	{ label: __("Circle"), value: "circle" },
	{ label: __("Diamond"), value: "diamond" },
];

export const SWITCH_SIZE = [
	{ label: __("Small"), value: "s" },
	{ label: __("Medium"), value: "m" },
	{ label: __("Large"), value: "l" },
	{ label: __("Extra Large"), value: "xl" },
];

export const ALIGNMENT = [
	{ label: __("Left"), value: "left" },
	{ label: __("Center"), value: "center" },
	{ label: __("Right"), value: "right" },
];

export const BORDER_STYLES = [
	{ label: __("None"), value: "none" },
	{ label: __("Dashed"), value: "dashed" },
	{ label: __("Solid"), value: "solid" },
	{ label: __("Dotted"), value: "dotted" },
	{ label: __("Double"), value: "double" },
	{ label: __("Groove"), value: "groove" },
	{ label: __("Inset"), value: "inset" },
	{ label: __("Outset"), value: "outset" },
	{ label: __("Ridge"), value: "ridge" },
];

export const BACKGROUND_TYPE = [
	{ label: __("Solid"), value: "solid" },
	{ label: __("Gradient"), value: "gradient" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None"), value: "none" },
	{ label: __("Lowercase"), value: "lowercase" },
	{ label: __("Capitalize"), value: "capitalize" },
	{ label: __("Uppercase"), value: "uppercase" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial"), value: "initial" },
	{ label: __("Overline"), value: "overline" },
	{ label: __("Line Through"), value: "line-through" },
	{ label: __("Underline"), value: "underline" },
	{ label: __("Underline Oveline"), value: "underline overline" },
];

export const DEFAULT_BACKGROUND = "#3074ff";

export const DEFAULT_ACTIVE_BG = "#0f52ba";

export const DEFAULT_CONTROLLER_COLOR = "white";
