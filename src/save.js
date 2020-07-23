/**
 * WordPress dependencies
 */
const { InnerBlocks, RichText } = wp.blockEditor;

/**
 * Internal dependencies
 */
import { DEFAULT_BACKGROUND, DEFAULT_CONTROLLER_COLOR } from "./constants";

const Save = ({ attributes }) => {
	const {
		id,
		initialContent,
		switchStyle,
		switchSize,
		buttonHeight,
		buttonWidth,
		seperatorType,
		activeColor,
		activeBg,
		primaryLabelText,
		secondaryLabelText,
		alignment,
		headingSpace,
		headingSpaceUnit,
		primaryLabelColor,
		secondaryLabelColor,
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

	const controllerStyle = {
		position: "absolute",
		content: "",
		zIndex: 1,
		backgroundImage:
			controllerType === "gradient" ? controllerGradient : "none",
		backgroundColor: controllerColor || DEFAULT_CONTROLLER_COLOR,
		transition: "0.4s",
	};

	const labelStyle = {
		margin: `0 ${labelSpace}${labelSpaceUnit}`,
		display: switchStyle === "text" && "none",
	};

	const primaryLabelStyle = {
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
		display: switchStyle === "text" ? "inline-block" : "none",
	};

	return (
		<div
			className="eb-toggle-wrapper"
			data-init-content={initialContent}
			data-size={switchSize}
			data-switch-style={switchStyle}
			data-bg-type={backgroundType}
			data-bg-color={backgroundColor}
			data-bg-gradient={backgroundGradient || "none"}
			data-primary-color={primaryLabelColor || "inherit"}
			data-secondary-color={secondaryLabelColor || "inherit"}
			data-active-color={activeColor || "inherit"}
			data-active-bg={activeBg}
		>
			<div
				className="eb-toggle-heading"
				style={{
					...headingStyle,
					display: switchStyle === "toggle" ? "block" : "none",
				}}
			>
				<input
					type="checkbox"
					className="eb-text-switch-checkbox"
					id={`eb-${id}`}
					style={{ display: "none" }}
				/>
				<div className="eb-text-switch-wrapper">
					<div
						className="eb-text-switch-content"
						style={{ width: `${buttonWidth}%`, marginLeft: getMargin() }}
					>
						<label
							className="eb-text-switch-label"
							for={`eb-${id}`}
							style={sliderStyle}
						>
							<div
								className="eb-text-switch-toggle"
								style={{ ...controllerStyle, zIndex: 0 }}
							></div>
							<div
								className="eb-switch-names"
								style={{
									fontSize: fontSize ? `${fontSize}${fontSizeUnit}` : undefined,
								}}
							>
								<RichText.Content
									tagName="span"
									className="eb-toggle-primary-label-text"
									style={primaryLabelStyle}
									value={primaryLabelText}
								/>
								<RichText.Content
									tagName="span"
									className="eb-toggle-secondary-label-text"
									style={secondaryLabelStyle}
									value={secondaryLabelText}
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
				<RichText.Content
					tagName="span"
					className="eb-toggle-primary-label"
					style={primaryLabelStyle}
					value={primaryLabelText}
				/>
				<label
					className={`eb-toggle-switch toggle-${switchSize}`}
					style={labelStyle}
				>
					<input className="eb-toggle-input" type="checkbox" />
					<span className="eb-toggle-controller" style={controllerStyle} />
					<span className="eb-toggle-slider" style={sliderStyle} />
				</label>

				<span
					className={`eb-toggle-${seperatorType} eb-toggle-seperator`}
					style={seperatorStyle}
				></span>

				<RichText.Content
					tagName="span"
					className="eb-toggle-secondary-label"
					style={secondaryLabelStyle}
					value={secondaryLabelText}
				/>
			</div>
			<div className="eb-toggle-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
