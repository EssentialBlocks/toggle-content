/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { select, subscribe, dispatch } = wp.data;
const { createBlock } = wp.blocks;
const {
	useBlockProps,
	BlockControls,
	AlignmentToolbar,
	InnerBlocks,
	RichText,
} = wp.blockEditor;
const { useState, useRef, useEffect } = wp.element;

import "./editor.scss";

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
	softMinifyCssStrings,
	generateDimensionsControlStyles,
	generateTypographyStyles,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} from "../util/helpers";

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

const Edit = ({ clientId, isSelected, attributes, setAttributes }) => {
	const {
		resOption,
		blockId,
		blockMeta,

		//
		initialContent,
		switchStyle,
		switchSize,
		buttonHeight,
		buttonWidth,
		seperatorType,
		primaryLabelText,
		secondaryLabelText,
		alignment,
		activeColor,
		activeBg,
		primaryLabelColor,
		secondaryLabelColor,
		headingSpace,
		headingSpaceUnit,
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

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

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

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	useEffect(() => {
		if (contentRef.current) {
			let container = contentRef.current.querySelector(
				".block-editor-block-list__layout"
			);

			if (container && container.children.length === 2) {
				const { firstChild, lastChild } = container;

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

	useEffect(() => {
		// Set block id
		setAttributes({ id: clientId });

		// Listen primary/seconday block remove event
		subscribe(checkInnerBlocks);

		// Add label click event listender for text type switch
		setClickEvents();
	}, []);

	useEffect(() => {
		// Replace removed block with an empty block
		if (isRemoved) {
			const { innerBlocks } = select("core/block-editor").getBlocksByClientId(
				clientId
			)[0];

			const newBlock = createBlock("core/paragraph", {});

			let replaceBlocks = [];
			if (isPrimary) {
				replaceBlocks = [newBlock, innerBlocks[0]];
			} else {
				replaceBlocks = [innerBlocks[0], newBlock];
			}

			dispatch("core/block-editor").replaceInnerBlocks(clientId, replaceBlocks);
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

	const checkInnerBlocks = () => {
		const block = select("core/block-editor").getBlocksByClientId(clientId)[0];

		if (block) {
			const { innerBlocks } = block;

			innerBlocks && innerBlocks.length === 2
				? setRemoved(false)
				: setRemoved(true);
		}
	};

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
		let width = buttonWidth || 30;

		switch (alignment) {
			case "center":
				return `${(100 - width) / 2}%`;
			case "right":
				return `${100 - width}%`;
			case "left":
				return `0%`;
		}
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

	const wrapperStylesDesktop = `
	.${blockId}.eb-toggle-wrapper{
		${wrpMarginDesktop}
		${wrpPaddingDesktop}
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
		margin-bottom: ${headingSpace || 30}${headingSpaceUnit || "px"};
		${tglTypoStylesDesktop}
	}
	
	.${blockId}.eb-toggle-wrapper .eb-text-switch-label,
	.${blockId}.eb-toggle-wrapper .eb-toggle-slider{
		${switchStyle === "toggle" ? `height:${buttonHeight || 50}px;` : ""}
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
	}

	.${blockId}.eb-toggle-wrapper .eb-toggle-heading{
		${tglTypoStylesTab}
	}
	`;

	const wrapperStylesMobile = `
	.${blockId}.eb-toggle-wrapper{
		${wrpMarginMobile}
		${wrpPaddingMobile}
	}


	.${blockId}.eb-toggle-wrapper .eb-toggle-heading{
		${tglTypoStylesMobile}
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

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),

		<BlockControls>
			<AlignmentToolbar
				value={alignment}
				onChange={(alignment) => setAttributes({ alignment })}
			/>
		</BlockControls>,
		<div {...blockProps}>
			<style>
				{`

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
							style={{ width: `${buttonWidth}%`, marginLeft: getMargin() }}
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
										placeholder={__("First")}
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
										placeholder={__("Second")}
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
						placeholder={__("First")}
						keepPlaceholderOnFocus
						// style={primaryLabelStyle}
						value={primaryLabelText}
						onChange={(primaryLabelText) => setAttributes({ primaryLabelText })}
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
						placeholder={__("Second")}
						keepPlaceholderOnFocus
						// style={secondaryLabelStyle}
						value={secondaryLabelText}
						onChange={(secondaryLabelText) =>
							setAttributes({ secondaryLabelText })
						}
					/>
				</div>
				<div className="eb-toggle-content" ref={contentRef}>
					<InnerBlocks template={DEFAULT_TEMPLATE} renderAppender={false} />
				</div>
			</div>
		</div>,
	];
};

export default Edit;
