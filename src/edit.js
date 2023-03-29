/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState, useRef } from "@wordpress/element";
import {
	useBlockProps,
	BlockControls,
	AlignmentToolbar,
	InnerBlocks,
	RichText,
} from "@wordpress/block-editor";
import { createBlock } from "@wordpress/blocks";
import { select, subscribe, dispatch, useSelect } from "@wordpress/data";

const { times } = lodash;

/**
 * Internal dependencies
 */
import {
	DEFAULT_TEMPLATE,
	DEFAULT_BACKGROUND,
	DEFAULT_ACTIVE_BG,
	DEFAULT_CONTROLLER_COLOR,
} from "./constants";

import {
	rangeButtonWidth,
	rangeButtonHeight,
	rangeHeadingSpace,
} from "./constants/rangeNames";

import { WrpBgConst } from "./constants/backgroundsConstants";
import { WrpBdShadowConst } from "./constants/borderShadowConstants";

const {
	softMinifyCssStrings,
	generateDimensionsControlStyles,
	generateBackgroundControlStyles,
	generateResponsiveRangeStyles,
	generateBorderShadowStyles,
	generateTypographyStyles,
	// mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} = window.EBToggleContentControls;

import classnames from "classnames";

import Inspector from "./inspector";

import {
	// typoPrefix_name,
	// typoPrefix_job,
	typoPrefix_tgl,
} from "./constants/typographyPrefixConstants";

import {
	tglWrapMarginConst,
	tglWrapPaddingConst,
} from "./constants/dimensionsConstants";

const Edit = ({
	clientId,
	isSelected,
	attributes,
	setAttributes,
	className,
}) => {
	const {
		resOption,
		blockId,
		blockMeta,
		classHook,
		initialContent,
		switchStyle,
		switchSize,
		seperatorType,
		primaryLabelText = "First",
		secondaryLabelText = "Second",
		alignment,
		activeColor,
		activeBg,
		primaryLabelColor,
		secondaryLabelColor,
		labelSpace,
		labelSpaceUnit,
		backgroundType,
		backgroundColor,
		backgroundGradient,
		controllerType,
		controllerColor,
		controllerGradient,
		borderStyle,
		borderWidth,
		borderColor,
		borderRadius,
		shadowColor,
		hOffset,
		vOffset,
		blur,
		spread,
		inset,

		[`${typoPrefix_tgl}FontSize`]: fontSize,
		[`${typoPrefix_tgl}SizeUnit`]: sizeUnit,
	} = attributes;

	const [isPrimary, setPrimary] = useState(
		initialContent === "primary" ? true : false
	);
	const [isRemoved, setRemoved] = useState(false);

	const contentRef = useRef(null);
	const primaryTextRef = useRef(null);
	const secondaryTextRef = useRef(null);
	const primaryRef = useRef(null);
	const secondaryRef = useRef(null);

	// this useEffect is for creating a unique blockId for each block's unique className
	useEffect(() => {
		const BLOCK_PREFIX = "eb-toggle";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	const blockProps = useBlockProps({
		className: classnames(className, `eb-guten-block-main-parent-wrapper`),
	});

	useEffect(() => {
		if (contentRef.current) {
			let container = contentRef.current.querySelector(
				".block-editor-block-list__layout"
			);

			let childElemenets = [];
			const child = container.children;

			for (let i = 0; i < child.length; i++) {
				if (child[i].classList.contains("block-editor-block-list__block")) {
					childElemenets.push(child[i]);
				}
			}

			if (container && childElemenets.length === 2) {
				let firstChild = childElemenets[0];
				let lastChild = childElemenets[1];

				if (isPrimary) {
					hideBlock(lastChild);
					showBlock(firstChild);
				} else {
					hideBlock(firstChild);
					showBlock(lastChild);
				}
			}
		}
	});

	/**
	 * Get innerBlocks
	 */
	const { innerBlocks } = useSelect(
		(select) => select("core/block-editor").getBlocksByClientId(clientId)[0]
	);
	useEffect(() => {
		const isBlockJustInserted = select(
			"core/block-editor"
		).wasBlockJustInserted(clientId);
		if (!isBlockJustInserted) {
			if (innerBlocks && innerBlocks.length === 2) {
				setRemoved(false);
			} else {
				setRemoved(true);
			}
		}
	}, [innerBlocks]);

	useEffect(() => {
		// Set block id
		setAttributes({ id: clientId });

		// Add label click event listender for text type switch
		setClickEvents();
	}, []);

	useEffect(() => {
		// Replace removed block with an empty block
		if (isRemoved) {
			const { replaceInnerBlocks } = dispatch("core/block-editor");
			const newBlock = createBlock("core/group", {});

			const filterInnerBlock = innerBlocks[0]
				? innerBlocks[0]
				: createBlock("core/group", {});

			let replaceBlocks = [];
			if (isPrimary) {
				replaceBlocks = [newBlock, filterInnerBlock];
			} else {
				replaceBlocks = [filterInnerBlock, newBlock];
			}

			replaceInnerBlocks(clientId, replaceBlocks);
		}
	}, [isRemoved]);

	const setClickEvents = () => {
		primaryRef.current &&
			primaryRef.current.addEventListener("click", () => setPrimary(true));

		secondaryRef.current &&
			secondaryRef.current.addEventListener("click", () => setPrimary(false));

		primaryTextRef.current &&
			primaryTextRef.current.addEventListener("click", () => setPrimary(true));

		secondaryTextRef.current &&
			secondaryTextRef.current.addEventListener("click", () =>
				setPrimary(false)
			);
	};

	const hideBlock = (node) => (node.style.display = "none");

	const showBlock = (node) => (node.style.display = "block");

	const onSwitchClick = (e) => {
		setPrimary(e.target.checked);
	};

	const getTransform = () => {
		if (isPrimary) return "translateX(0px)";

		switch (switchSize) {
			case "s":
				return "translateX(22px)";
			case "m":
				return "translateX(26px)";
			case "l":
				return "translateX(36px)";
			case "xl":
				return "translateX(42px)";
		}
	};

	const getRadius = () => {
		if (switchStyle === "rectangle") return "0px";

		switch (switchSize) {
			case "s":
				return "10px";
			case "m":
				return "13px";
			case "l":
				return "16px";
			case "xl":
				return "21px";
		}
	};

	const getMargin = () => {
		switch (alignment) {
			case "center":
				return {
					marginLeft: "auto",
					marginRight: "auto",
				};

			case "right":
				return {
					marginLeft: "auto",
					marginRight: "0px",
				};

			case "left":
				return {
					marginLeft: "0px",
					marginRight: "auto",
				};
		}

		return {
			marginLeft: "auto",
			marginRight: "auto",
		};
	};

	// styles related to generateTypographyStyles start ⬇

	const {
		typoStylesDesktop: tglTypoStylesDesktop,
		typoStylesTab: tglTypoStylesTab,
		typoStylesMobile: tglTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_tgl,
		// defaultFontSize: 20,
	});
	// styles related to generateTypographyStyles end

	// styles related to generateResponsiveRangeStyles start ⬇
	const {
		rangeStylesDesktop: btnHeightDesktop,
		rangeStylesTab: btnHeightTab,
		rangeStylesMobile: btnHeightMobile,
	} = generateResponsiveRangeStyles({
		controlName: rangeButtonHeight,
		customUnit: "px",
		property: "height",
		attributes,
	});

	const {
		rangeStylesDesktop: btnWidthDesktop,
		rangeStylesTab: btnWidthTab,
		rangeStylesMobile: btnWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: rangeButtonWidth,
		property: "width",
		attributes,
	});

	const {
		rangeStylesDesktop: headingSpaceDesktop,
		rangeStylesTab: headingSpaceTab,
		rangeStylesMobile: headingSpaceMobile,
	} = generateResponsiveRangeStyles({
		controlName: rangeHeadingSpace,
		property: "margin-bottom",
		attributes,
	});

	// styles related to generateResponsiveRangeStyles end

	// styles related to generateDimensionsControlStyles start ⬇
	const {
		dimensionStylesDesktop: wrpMarginDesktop,
		dimensionStylesTab: wrpMarginTab,
		dimensionStylesMobile: wrpMarginMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: tglWrapMarginConst,
		styleFor: "margin",
	});

	const {
		dimensionStylesDesktop: wrpPaddingDesktop,
		dimensionStylesTab: wrpPaddingTab,
		dimensionStylesMobile: wrpPaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: tglWrapPaddingConst,
		styleFor: "padding",
	});
	// styles related to generateDimensionsControlStyles end

	// styles related to generateBackgroundControlStyles start ⬇
	const {
		backgroundStylesDesktop: wrpBackgroundStylesDesktop,
		hoverBackgroundStylesDesktop: wrpHoverBackgroundStylesDesktop,
		backgroundStylesTab: wrpBackgroundStylesTab,
		hoverBackgroundStylesTab: wrpHoverBackgroundStylesTab,
		backgroundStylesMobile: wrpBackgroundStylesMobile,
		hoverBackgroundStylesMobile: wrpHoverBackgroundStylesMobile,
		overlayStylesDesktop: wrpOverlayStylesDesktop,
		hoverOverlayStylesDesktop: wrpHoverOverlayStylesDesktop,
		overlayStylesTab: wrpOverlayStylesTab,
		hoverOverlayStylesTab: wrpHoverOverlayStylesTab,
		overlayStylesMobile: wrpOverlayStylesMobile,
		hoverOverlayStylesMobile: wrpHoverOverlayStylesMobile,
		bgTransitionStyle: wrpBgTransitionStyle,
		ovlTransitionStyle: wrpOvlTransitionStyle,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: WrpBgConst,
		// noOverlay: true,
		// noMainBgi: true,
		// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
	});

	// styles related to generateBackgroundControlStyles End

	// styles related to generateBorderShadowStyles start ⬇
	const {
		styesDesktop: wrpBdShdStyesDesktop,
		styesTab: wrpBdShdStyesTab,
		styesMobile: wrpBdShdStyesMobile,
		stylesHoverDesktop: wrpBdShdStylesHoverDesktop,
		stylesHoverTab: wrpBdShdStylesHoverTab,
		stylesHoverMobile: wrpBdShdStylesHoverMobile,
		transitionStyle: wrpBdShdTransitionStyle,
	} = generateBorderShadowStyles({
		controlName: WrpBdShadowConst,
		attributes,
		// noShadow: true,
		// noBorder: true,
	});

	// styles related to generateBorderShadowStyles End

	const wrapperStylesDesktop = `
	.${blockId}.eb-toggle-wrapper{
		${wrpMarginDesktop}
		${wrpPaddingDesktop}
		${wrpBackgroundStylesDesktop}
		${wrpBdShdStyesDesktop}
		transition: all 0.5s, ${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
	}

	.${blockId}.eb-toggle-wrapper:hover{
		${wrpHoverBackgroundStylesDesktop}
		${wrpBdShdStylesHoverDesktop}
	}

	.${blockId}.eb-toggle-wrapper:before{
		${wrpOverlayStylesDesktop}
		transition: all 0.5s, ${wrpOvlTransitionStyle};
	}

	.${blockId}.eb-toggle-wrapper:hover:before{
		${wrpHoverOverlayStylesDesktop}
	}

	.${blockId}.eb-toggle-wrapper .eb-toggle-secondary-label-text,
	.${blockId}.eb-toggle-wrapper .eb-toggle-secondary-label,
	.${blockId}.eb-toggle-wrapper .eb-toggle-primary-label-text,
	.${blockId}.eb-toggle-wrapper .eb-toggle-primary-label
	{
		z-index:2;
	}


	.${blockId}.eb-toggle-wrapper .eb-text-switch-toggle{
		z-index:0;
	}

	${
		switchStyle === "toggle"
			? `
			.${blockId}.eb-toggle-wrapper .eb-text-switch-content{
				${btnWidthDesktop}
			}
			`
			: ""
	}

	.${blockId}.eb-toggle-wrapper .eb-text-switch-toggle,
	.${blockId}.eb-toggle-wrapper .eb-toggle-controller
	{
		position:absolute;
		content:"";
		z-index:1;
		background-color: ${controllerColor || DEFAULT_CONTROLLER_COLOR};
		background-image:${controllerType === "gradient" ? controllerGradient : "none"};
		transition:0.4s;
	}

	.${blockId}.eb-toggle-wrapper .eb-toggle-heading{
		text-align: ${alignment || "center"};
		${tglTypoStylesDesktop}
		${headingSpaceDesktop}
	}

	.${blockId}.eb-toggle-wrapper .eb-text-switch-label,
	.${blockId}.eb-toggle-wrapper .eb-toggle-slider{
		${switchStyle === "toggle" ? `${btnHeightDesktop}` : ""}
		background-color:${backgroundColor || DEFAULT_BACKGROUND};
		background-image:${backgroundType === "gradient" ? backgroundGradient : "none"};
		${switchStyle === "rounded" ? `border-radius:21px;` : ""}
		border: ${borderWidth || 0}px ${borderStyle || "none"} ${
		borderColor || "#00000000"
	};
		box-shadow: ${hOffset || 0}px ${vOffset || 0}px ${blur || 0}px ${
		spread || 0
	}px ${shadowColor || "#00000000"} ${inset ? "inset" : ""};

	}

	.${blockId}.eb-toggle-wrapper .eb-toggle-switch{
		margin: 0 ${labelSpace || 10}${labelSpaceUnit || px};
		${switchStyle === "text" ? `display:none` : ""}
	}

	${
		switchStyle === "text"
			? `
			.${blockId}.eb-toggle-wrapper .eb-toggle-primary-label-text,
			.${blockId}.eb-toggle-wrapper .eb-toggle-primary-label
			{
				${seperatorType !== "none" ? `margin:0 -10px 0 10px;` : ""}
				padding:10px 20px;
				border:${borderWidth || 0}px ${borderStyle || "none"} ${
					borderColor || "#00000000"
			  };
				border-right:none;
				border-top-left-radius: ${borderRadius || 0}px;
				border-bottom-left-radius: ${borderRadius || 0}px;
			}


			.${blockId}.eb-toggle-wrapper .eb-toggle-secondary-label-text,
			.${blockId}.eb-toggle-wrapper .eb-toggle-secondary-label
			{
				${seperatorType !== "none" ? `margin:0 10px 0 -10px;` : ""}
				padding:10px 20px;
				border:${borderWidth || 0}px ${borderStyle || "none"} ${
					borderColor || "#00000000"
			  };
				border-left:none;
				border-top-right-radius: ${borderRadius || 0}px;
				border-bottom-right-radius: ${borderRadius || 0}px;
			}
			`
			: ""
	}

	.${blockId}.eb-toggle-wrapper .eb-toggle-seperator{
		display: ${switchStyle === "text" ? "inline-block" : "none"};
	}

	.${blockId}.eb-toggle-wrapper .eb-switch-names{
		${fontSize ? `font-size:${fontSize}${sizeUnit || "px"};` : ""}
	}

	`;

	const wrapperStylesTab = `
	.${blockId}.eb-toggle-wrapper{
		${wrpMarginTab}
		${wrpPaddingTab}
		${wrpBackgroundStylesTab}
		${wrpBdShdStyesTab}
	}

	.${blockId}.eb-toggle-wrapper:hover{
		${wrpHoverBackgroundStylesTab}
		${wrpBdShdStylesHoverTab}
	}

	.${blockId}.eb-toggle-wrapper:before{
		${wrpOverlayStylesTab}
	}

	.${blockId}.eb-toggle-wrapper:hover:before{
		${wrpHoverOverlayStylesTab}
	}

	.${blockId}.eb-toggle-wrapper .eb-toggle-heading{
		${tglTypoStylesTab}
		${headingSpaceTab}
	}

	${
		switchStyle === "toggle"
			? `
			.${blockId}.eb-toggle-wrapper .eb-text-switch-content{
				${btnWidthTab}
			}

			.${blockId}.eb-toggle-wrapper .eb-text-switch-label,
			.${blockId}.eb-toggle-wrapper .eb-toggle-slider{
				${btnHeightTab}
			}
			`
			: ""
	}


	`;

	const wrapperStylesMobile = `
	.${blockId}.eb-toggle-wrapper{
		${wrpMarginMobile}
		${wrpPaddingMobile}
		${wrpBackgroundStylesMobile}
		${wrpBdShdStyesMobile}
	}

	.${blockId}.eb-toggle-wrapper:hover{
		${wrpHoverBackgroundStylesMobile}
		${wrpBdShdStylesHoverMobile}
	}

	.${blockId}.eb-toggle-wrapper:before{
		${wrpOverlayStylesMobile}
	}

	.${blockId}.eb-toggle-wrapper:hover:before{
		${wrpHoverOverlayStylesMobile}
	}

	.${blockId}.eb-toggle-wrapper .eb-toggle-heading{
		${tglTypoStylesMobile}
		${headingSpaceMobile}
	}

	${
		switchStyle === "toggle"
			? `
			.${blockId}.eb-toggle-wrapper .eb-text-switch-content{
				${btnWidthMobile}
			}

			.${blockId}.eb-toggle-wrapper .eb-text-switch-label,
			.${blockId}.eb-toggle-wrapper .eb-toggle-slider{
				${btnHeightMobile}
			}
			`
			: ""
	}

	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}


	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}


	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}


	`);

	//
	// styling codes End here
	//

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}

			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={(alignment) => setAttributes({ alignment })}
				/>
			</BlockControls>
			<div {...blockProps}>
				<style>
					{`
					.eb-toggle-content .block-editor-block-list__layout > p:nth-child(2) > span {
						opacity: 1 !important;
					}
					${
						!isPrimary
							? `
							.${blockId}.eb-toggle-wrapper .eb-text-switch-toggle{
								margin-left: 50%;
							}
							`
							: ""
					}

					${
						switchStyle !== "toggle"
							? `
						.${blockId}.eb-toggle-wrapper .eb-text-switch-toggle,
						.${blockId}.eb-toggle-wrapper .eb-toggle-controller{
							transform: ${getTransform()};
							border-radius: ${getRadius()};
						}
						`
							: ""
					}


					.${blockId}.eb-toggle-wrapper .eb-toggle-primary-label-text,
					.${blockId}.eb-toggle-wrapper .eb-toggle-primary-label
					{
						color: ${
							isPrimary
								? activeColor || primaryLabelColor || "inherit"
								: primaryLabelColor || "inherit"
						};
						${
							switchStyle === "text"
								? `background: ${
										isPrimary
											? activeBg || DEFAULT_ACTIVE_BG
											: backgroundColor || DEFAULT_BACKGROUND
								  };`
								: ""
						}
					}


					.${blockId}.eb-toggle-wrapper .eb-toggle-secondary-label-text,
					.${blockId}.eb-toggle-wrapper .eb-toggle-secondary-label
					{
						color: ${
							!isPrimary
								? activeColor || secondaryLabelColor || "inherit"
								: secondaryLabelColor || "inherit"
						};
						${
							switchStyle === "text"
								? `background: ${
										!isPrimary
											? activeBg || DEFAULT_ACTIVE_BG
											: backgroundColor || DEFAULT_BACKGROUND
								  };`
								: ""
						}
					}


					.${blockId}.eb-toggle-wrapper .eb-toggle-seperator{
						background:${backgroundColor || DEFAULT_BACKGROUND};
					}

					${desktopAllStyles}

					/* mimmikcssStart */

					${resOption === "Tablet" ? tabAllStyles : " "}
					${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}

					/* mimmikcssEnd */

					@media all and (max-width: 1024px) {

						/* tabcssStart */
						${softMinifyCssStrings(tabAllStyles)}
						/* tabcssEnd */

					}

					@media all and (max-width: 767px) {

						/* mobcssStart */
						${softMinifyCssStrings(mobileAllStyles)}
						/* mobcssEnd */

					}
				`}
				</style>
				<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
					<div className={`${blockId} eb-toggle-wrapper`}>
						<div
							className="eb-toggle-heading"
							style={{
								// ...headingStyle,
								display: switchStyle === "toggle" ? "block" : "none",
							}}
						>
							<div className="eb-text-switch-wrapper">
								<div
									className="eb-text-switch-content"
									style={{ ...getMargin() }}
								>
									<label
										className="eb-text-switch-label"
										// style={sliderStyle}
									>
										<div
											className="eb-text-switch-toggle"
											style={{
												// ...controllerStyle,
												// zIndex: 0,
												marginLeft: !isPrimary && "50%",
											}}
										></div>
										<div className="eb-switch-names">
											<RichText
												tagName="span"
												className="eb-toggle-primary-label-text"
												ref={primaryTextRef}
												// placeholder={__("First", "essential-blocks")}
												// style={primaryLabelStyle}
												value={primaryLabelText}
												onChange={(primaryLabelText) =>
													setAttributes({ primaryLabelText })
												}
											/>

											<RichText
												tagName="span"
												className="eb-toggle-secondary-label-text"
												ref={secondaryTextRef}
												// placeholder={__("Second", "essential-blocks")}
												// style={secondaryLabelStyle}
												value={secondaryLabelText}
												onChange={(secondaryLabelText) =>
													setAttributes({ secondaryLabelText })
												}
											/>
										</div>
									</label>
								</div>
							</div>
						</div>

						<div
							className="eb-toggle-heading"
							style={{
								// ...headingStyle,
								display: switchStyle !== "toggle" ? "block" : "none",
							}}
						>
							<RichText
								tagName="span"
								className="eb-toggle-primary-label"
								ref={primaryRef}
								placeholder={__("First", "essential-blocks")}
								value={primaryLabelText}
								onChange={(primaryLabelText) =>
									setAttributes({ primaryLabelText })
								}
							/>
							<label
								className={`eb-toggle-switch toggle-${switchSize}`}
								// style={labelStyle}
							>
								<input
									type="checkbox"
									checked={isPrimary}
									onChange={(e) => onSwitchClick(e)}
								/>
								<span
									className="eb-toggle-controller"
									// style={controllerStyle}
								/>
								<span
									className="eb-toggle-slider"
									// style={sliderStyle}
								/>
							</label>

							<span
								className={`eb-toggle-seperator eb-toggle-${seperatorType}`}
								// style={seperatorStyle}
							></span>

							<RichText
								tagName="span"
								ref={secondaryRef}
								className="eb-toggle-secondary-label"
								placeholder={__("Second", "essential-blocks")}
								value={secondaryLabelText}
								onChange={(secondaryLabelText) =>
									setAttributes({ secondaryLabelText })
								}
							/>
						</div>
						<div className="eb-toggle-content" ref={contentRef}>
							<InnerBlocks
								templateLock={false}
								template={DEFAULT_TEMPLATE}
								renderAppender={false}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Edit;
