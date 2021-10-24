import * as typoPrefixs from "./constants/typographyPrefixConstants";

import {
	tglWrapMarginConst,
	tglWrapPaddingConst,
} from "./constants/dimensionsConstants";

// import { WrpBgConst } from "./constants/backgroundsConstants";

// import {
// 	WrpBdShadowConst,
// 	prefixSocialBdShadow,
// } from "./constants/borderShadowConstants";

// import {
// 	wrapperWidth,
// 	rangeIconSize,
// 	rangeIconPadding,
// 	rangeIconDistance,
// 	rangeIconRowGap,
// 	sclDeviderPosRight,
// } from "./constants/rangeNames";

import {
	generateTypographyAttributes,
	generateDimensionsAttributes,
	// generateBackgroundAttributes,
	// generateBorderShadowAttributes,
	// generateResponsiveRangeAttributes,
} from "../util/helpers";

const attributes = {
	// the following 4 attributes is must required for responsive options and asset generation for frontend
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "Desktop",
	},

	// blockId attribute for making unique className and other uniqueness ⬇
	blockId: {
		type: "string",
	},

	//
	blockRoot: {
		type: "string",
		default: "essential_block",
	},

	// blockMeta is for keeping all the styles ⬇
	blockMeta: {
		type: "object",
	},

	//
	id: {
		type: "string",
	},
	initialContent: {
		type: "string",
		default: "primary",
	},
	switchStyle: {
		type: "string",
		default: "rounded",
	},
	buttonHeight: {
		type: "number",
	},
	buttonWidth: {
		type: "number",
	},
	alignment: {
		type: "string",
		default: "center",
	},
	switchSize: {
		type: "string",
		default: "m",
	},
	switchSizeUnit: {
		type: "string",
		default: "px",
	},
	seperatorType: {
		type: "string",
		default: "none",
	},
	activeColor: {
		type: "string",
	},
	headingSpace: {
		type: "number",
	},
	headingSpaceUnit: {
		type: "string",
		default: "px",
	},
	labelSpace: {
		type: "number",
	},
	labelSpaceUnit: {
		type: "string",
		default: "px",
	},
	// fontFamily: {
	// 	type: "string",
	// },
	// fontWeight: {
	// 	type: "string",
	// },
	// fontSize: {
	// 	type: "number",
	// },
	// fontSizeUnit: {
	// 	type: "string",
	// 	default: "px",
	// },
	// lineHeight: {
	// 	type: "number",
	// },
	// lineHeightUnit: {
	// 	type: "string",
	// 	default: "px",
	// },
	// letterSpacing: {
	// 	type: "number",
	// },
	// letterSpacingUnit: {
	// 	type: "string",
	// 	default: "px",
	// },
	// textDecoration: {
	// 	type: "string",
	// 	default: "none",
	// },
	// textTransform: {
	// 	type: "string",
	// 	default: "none",
	// },
	backgroundType: {
		type: "string",
		default: "solid",
	},
	backgroundColor: {
		type: "string",
	},
	backgroundGradient: {
		type: "string",
		default: "linear-gradient(45deg,#00F260,#0575E6)",
	},
	controllerType: {
		type: "string",
		default: "solid",
	},
	controllerColor: {
		type: "string",
	},
	controllerGradient: {
		type: "string",
	},
	borderStyle: {
		type: "string",
	},
	borderWidth: {
		type: "number",
	},
	borderColor: {
		type: "string",
	},
	borderRadius: {
		type: "number",
	},
	primaryLabelText: {
		type: "string",
	},
	secondaryLabelText: {
		type: "string",
	},
	primaryLabelColor: {
		type: "string",
	},
	secondaryLabelColor: {
		type: "string",
	},
	activeBg: {
		type: "string",
	},
	shadowColor: {
		type: "string",
	},
	hOffset: {
		type: "number",
	},
	vOffset: {
		type: "number",
	},
	blur: {
		type: "number",
	},
	spread: {
		type: "number",
	},
	inset: {
		type: "boolean",
		default: false,
	},

	// typography attributes
	...generateTypographyAttributes(Object.values(typoPrefixs)),

	//
	...generateDimensionsAttributes(
		tglWrapMarginConst
		//,
		// {
		// 	top: 15,
		// 	bottom: 20,
		// 	isLinked: false,
		// }
	),
	...generateDimensionsAttributes(
		tglWrapPaddingConst
		//,
		// {
		// 	top: 15,
		// 	bottom: 20,
		// 	isLinked: false,
		// }
	),
};

export default attributes;
