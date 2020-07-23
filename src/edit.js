/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { select, subscribe, dispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import {
	BlockControls,
	AlignmentToolbar,
	InnerBlocks,
	RichText,
} from "@wordpress/block-editor";
import { useState, useRef, useEffect } from "@wordpress/element";

/**
 * Internal dependencies
 */
import {
	DEFAULT_TEMPLATE,
	DEFAULT_BACKGROUND,
	DEFAULT_ACTIVE_BG,
	DEFAULT_CONTROLLER_COLOR,
} from "./constants";
import Inspector from "./inspector";

const Edit = ({ clientId, isSelected, attributes, setAttributes }) => {
	const {
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
		fontFamily,
		fontSize,
		fontSizeUnit,
		textTransform,
		textDecoration,
		letterSpacing,
		letterSpacingUnit,
		lineHeight,
		lineHeightUnit,
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

	// Style objects
	const controllerStyle = {
		position: "absolute",
		content: "",
		zIndex: 1,
		backgroundColor: controllerColor || DEFAULT_CONTROLLER_COLOR,
		backgroundImage:
			controllerType === "gradient" ? controllerGradient : "none",
		transition: "0.4s",
		transform: switchStyle !== "toggle" && getTransform(),
		borderRadius: switchStyle === "toggle" ? undefined : getRadius(),
	};

	const headingStyle = {
		textAlign: alignment,
		marginBottom: `${headingSpace}${headingSpaceUnit}`,
		fontSize: fontSize ? `${fontSize}${fontSizeUnit}` : undefined,
		fontFamily: fontFamily,
		textTransform: textTransform || undefined,
		textDecoration: textDecoration || undefined,
		letterSpacing: `${letterSpacing}${letterSpacingUnit}`,
		lineHeight:
			switchStyle !== "toggle" && lineHeight
				? `${lineHeight}${lineHeightUnit}`
				: undefined,
	};

	const sliderStyle = {
		height: switchStyle === "toggle" && `${buttonHeight}px`,
		backgroundColor: backgroundColor || DEFAULT_BACKGROUND,
		backgroundImage:
			backgroundType === "gradient" ? backgroundGradient : "none",
		borderRadius: switchStyle === "rounded" && "21px",
		border: `${borderWidth}px ${borderStyle} ${borderColor}`,
		boxShadow: `${hOffset || 0}px ${vOffset || 0}px ${blur || 0}px ${
			spread || 0
		}px ${shadowColor} ${inset ? "inset" : ""}`,
	};

	const labelStyle = {
		margin: `0 ${labelSpace}${labelSpaceUnit}`,
		display: switchStyle === "text" && "none",
	};

	const primaryLabelStyle = {
		color: isPrimary
			? activeColor || primaryLabelColor
			: primaryLabelColor || "inherit",
		background:
			switchStyle === "text"
				? isPrimary
					? activeBg || DEFAULT_ACTIVE_BG
					: backgroundColor || DEFAULT_BACKGROUND
				: "transparent",
		margin:
			switchStyle === "text" && seperatorType !== "none" && "0 -10px 0 10px",
		padding: switchStyle === "text" && "10px 20px",
		borderTop:
			switchStyle === "text" &&
			`${borderWidth}px ${borderStyle} ${borderColor}`,
		borderRight: switchStyle === "text" && "none",
		borderBottom:
			switchStyle === "text" &&
			`${borderWidth}px ${borderStyle} ${borderColor}`,
		borderLeft:
			switchStyle === "text" &&
			`${borderWidth}px ${borderStyle} ${borderColor}`,
		borderTopLeftRadius: switchStyle === "text" && borderRadius,
		borderBottomLeftRadius: switchStyle === "text" && borderRadius,
	};

	const secondaryLabelStyle = {
		color: !isPrimary
			? activeColor || secondaryLabelColor
			: secondaryLabelColor || "inherit",
		background:
			switchStyle === "text"
				? !isPrimary
					? activeBg || DEFAULT_ACTIVE_BG
					: backgroundColor || DEFAULT_BACKGROUND
				: "transparent",
		margin:
			switchStyle === "text" && seperatorType !== "none" && "0 10px 0 -10px",
		padding: switchStyle === "text" && "10px 20px",
		borderTop:
			switchStyle === "text" &&
			`${borderWidth}px ${borderStyle} ${borderColor}`,
		borderRight:
			switchStyle === "text" &&
			`${borderWidth}px ${borderStyle} ${borderColor}`,
		borderBottom:
			switchStyle === "text" &&
			`${borderWidth}px ${borderStyle} ${borderColor}`,
		borderLeft: switchStyle === "text" && "none",
		borderTopRightRadius: switchStyle === "text" && borderRadius,
		borderBottomRightRadius: switchStyle === "text" && borderRadius,
	};

	const seperatorStyle = {
		display:
			switchStyle === "text" && seperatorType !== "none"
				? "inline-block"
				: "none",
		background: backgroundColor || DEFAULT_BACKGROUND,
	};

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

		<div className="eb-toggle-wrapper">
			<div
				className="eb-toggle-heading"
				style={{
					...headingStyle,
					display: switchStyle === "toggle" ? "block" : "none",
				}}
			>
				<div className="eb-text-switch-wrapper">
					<div
						className="eb-text-switch-content"
						style={{ width: `${buttonWidth}%`, marginLeft: getMargin() }}
					>
						<label className="eb-text-switch-label" style={sliderStyle}>
							<div
								className="eb-text-switch-toggle"
								style={{
									...controllerStyle,
									zIndex: 0,
									marginLeft: !isPrimary && "50%",
								}}
							></div>
							<div
								className="eb-switch-names"
								style={{
									fontSize: fontSize ? `${fontSize}${fontSizeUnit}` : undefined,
								}}
							>
								<RichText
									tagName="span"
									className="eb-text-switch-primary"
									ref={primaryTextRef}
									placeholder={__("First")}
									style={primaryLabelStyle}
									value={primaryLabelText}
									onChange={(primaryLabelText) =>
										setAttributes({ primaryLabelText })
									}
								/>

								<RichText
									tagName="span"
									className="eb-text-switch-secondary"
									ref={secondaryTextRef}
									placeholder={__("Second")}
									style={secondaryLabelStyle}
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
					...headingStyle,
					display: switchStyle !== "toggle" ? "block" : "none",
				}}
			>
				<RichText
					tagName="span"
					ref={primaryRef}
					placeholder={__("First")}
					keepPlaceholderOnFocus
					style={primaryLabelStyle}
					value={primaryLabelText}
					onChange={(primaryLabelText) => setAttributes({ primaryLabelText })}
				/>
				<label
					className={`eb-toggle-switch toggle-${switchSize}`}
					style={labelStyle}
				>
					<input
						type="checkbox"
						checked={isPrimary}
						onChange={(e) => onSwitchClick(e)}
					/>
					<span className="eb-toggle-controller" style={controllerStyle} />
					<span className="eb-toggle-slider" style={sliderStyle} />
				</label>

				<span
					className={`eb-toggle-${seperatorType}`}
					style={seperatorStyle}
				></span>

				<RichText
					tagName="span"
					ref={secondaryRef}
					placeholder={__("Second")}
					keepPlaceholderOnFocus
					style={secondaryLabelStyle}
					value={secondaryLabelText}
					onChange={(secondaryLabelText) =>
						setAttributes({ secondaryLabelText })
					}
				/>
			</div>
			<div className="eb-toggle-content" ref={contentRef}>
				<InnerBlocks template={DEFAULT_TEMPLATE} renderAppender={false} />
			</div>
		</div>,
	];
};

export default Edit;
