/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	PanelBody,
	RadioControl,
	RangeControl,
	SelectControl,
	ToggleControl,
	BaseControl,
	ButtonGroup,
	Button,
	Dropdown,
} = wp.components;
const { InspectorControls, PanelColorSettings } = wp.blockEditor;

/**
 * Internal dependencies
 */
import {
	SWITCH_STYLES,
	SWITCH_SIZE,
	SEPERATOR_TYPE,
	BORDER_STYLES,
	BACKGROUND_TYPE,
	INITIAL_CONTENT,
	TEXT_TRANSFORM,
	TEXT_DECORATION,
} from "./constants";
import UnitControl from "../util/unit-control";
import GradientColorController from "../util/gradient-color-controller";
import FontPicker from "../util/typography-control/FontPicker";
import ColorControl from "../util/color-control";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		initialContent,
		switchStyle,
		switchSize,
		buttonHeight,
		buttonWidth,
		seperatorType,
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
		fontFamily,
		fontWeight,
		textTransform,
		textDecoration,
		fontSize,
		fontSizeUnit,
		letterSpacing,
		letterSpacingUnit,
		lineHeight,
		lineHeightUnit,
	} = attributes;

	let labelColors = [
		{
			value: primaryLabelColor,
			onChange: (primaryLabelColor) => setAttributes({ primaryLabelColor }),
			label: "Primary Text",
		},
		{
			value: secondaryLabelColor,
			onChange: (secondaryLabelColor) => setAttributes({ secondaryLabelColor }),
			label: "Secondary Text",
		},
		{
			value: activeColor,
			onChange: (activeColor) => setAttributes({ activeColor }),
			label: "Active Text Color",
		},
	];

	// Add active background color controller for text type switch
	if (switchStyle === "text") {
		labelColors = [
			...labelColors,
			{
				value: backgroundColor,
				onChange: (backgroundColor) => setAttributes({ backgroundColor }),
				label: "Background",
			},
			{
				value: activeBg,
				onChange: (activeBg) => setAttributes({ activeBg }),
				label: "Active Background",
			},
		];
	}

	const MAX_LINE_HEIGHT = lineHeightUnit === "em" ? 10 : 100;
	const LINE_HEIGHT_STEP = lineHeightUnit === "em" ? 0.1 : 1;

	const MAX_LETTER_SPACING = letterSpacingUnit === "em" ? 10 : 100;
	const LETTER_SPACING_STEP = letterSpacingUnit === "em" ? 0.1 : 1;

	return (
		<InspectorControls key="controls">
			<PanelBody title={__("Switch Style")}>
				<RadioControl
					label={__("Initial Content")}
					selected={initialContent}
					onChange={(initialContent) => setAttributes({ initialContent })}
					options={INITIAL_CONTENT}
				/>

				<SelectControl
					label={__("Switch Type")}
					value={switchStyle}
					onChange={(switchStyle) => setAttributes({ switchStyle })}
					options={SWITCH_STYLES}
				/>

				{(switchStyle === "rounded" || switchStyle === "reactangle") && (
					<SelectControl
						label={__("Switch Size")}
						value={switchSize}
						options={SWITCH_SIZE}
						onChange={(switchSize) => setAttributes({ switchSize })}
					/>
				)}

				{switchStyle === "toggle" && (
					<RangeControl
						label={__("Button Height")}
						value={buttonHeight}
						onChange={(buttonHeight) => setAttributes({ buttonHeight })}
						min={10}
						max={100}
					/>
				)}

				{switchStyle === "toggle" && (
					<RangeControl
						label={__("Button Width")}
						value={buttonWidth}
						onChange={(buttonWidth) => setAttributes({ buttonWidth })}
						min={10}
						max={100}
					/>
				)}

				{switchStyle === "text" && (
					<SelectControl
						label={__("Sepetator Type")}
						value={seperatorType}
						options={SEPERATOR_TYPE}
						onChange={(seperatorType) => setAttributes({ seperatorType })}
					/>
				)}

				<UnitControl
					selectedUnit={headingSpaceUnit}
					unitTypes={[
						{ label: "px", value: "px" },
						{ label: "%", value: "%" },
					]}
					onClick={(headingSpaceUnit) => setAttributes({ headingSpaceUnit })}
				/>

				<RangeControl
					label={__("Heading Space")}
					value={headingSpace}
					onChange={(headingSpace) => setAttributes({ headingSpace })}
				/>

				{(switchStyle === "rectangle" || switchStyle === "rounded") && (
					<>
						<UnitControl
							selectedUnit={labelSpaceUnit}
							unitTypes={[
								{ label: "px", value: "px" },
								{ label: "%", value: "%" },
							]}
							onClick={(labelSpaceUnit) => setAttributes({ labelSpaceUnit })}
						/>

						<RangeControl
							label={__("Label Space")}
							value={labelSpace}
							onChange={(labelSpace) => setAttributes({ labelSpace })}
						/>
					</>
				)}

				<BaseControl label={__("Typography")} className="eb-typography-base">
					<Dropdown
						className="eb-typography-dropdown"
						contentClassName="my-popover-content-classname"
						position="bottom right"
						renderToggle={({ isOpen, onToggle }) => (
							<Button
								isSmall
								onClick={onToggle}
								aria-expanded={isOpen}
								icon="edit"
							></Button>
						)}
						renderContent={() => (
							<div style={{ padding: "1rem" }}>
								<FontPicker
									label={__("Font Family")}
									onChange={(fontFamily) => setAttributes({ fontFamily })}
								/>

								<UnitControl
									selectedUnit={fontSizeUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
										{ label: "%", value: "%" },
									]}
									onClick={(fontSizeUnit) => setAttributes({ fontSizeUnit })}
								/>

								<RangeControl
									label={__("Font Size")}
									value={fontSize}
									onChange={(fontSize) => setAttributes({ fontSize })}
								/>

								<SelectControl
									label={__("Text Decoration")}
									value={textDecoration}
									options={TEXT_DECORATION}
									onChange={(textDecoration) =>
										setAttributes({ textDecoration })
									}
								/>

								<SelectControl
									label={__("Text Transform")}
									value={textTransform}
									options={TEXT_TRANSFORM}
									onChange={(textTransform) => setAttributes({ textTransform })}
								/>

								<UnitControl
									selectedUnit={letterSpacingUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(letterSpacingUnit) =>
										setAttributes({ letterSpacingUnit })
									}
								/>

								<RangeControl
									label={__("Letter Spacing")}
									value={letterSpacing}
									onChange={(letterSpacing) => setAttributes({ letterSpacing })}
									min={0}
									max={MAX_LETTER_SPACING}
									step={LETTER_SPACING_STEP}
								/>

								{switchStyle !== "toggle" && (
									<UnitControl
										selectedUnit={lineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(lineHeightUnit) =>
											setAttributes({ lineHeightUnit })
										}
									/>
								)}

								{switchStyle !== "toggle" && (
									<RangeControl
										label={__("Line Height")}
										value={lineHeight}
										onChange={(lineHeight) => setAttributes({ lineHeight })}
										min={0}
										max={MAX_LINE_HEIGHT}
										step={LINE_HEIGHT_STEP}
									/>
								)}
							</div>
						)}
					/>
				</BaseControl>

				{switchStyle !== "text" && (
					<ToggleControl
						label={__("Gradient Background")}
						checked={backgroundType === "gradient"}
						onChange={() =>
							setAttributes({
								backgroundType:
									backgroundType === "solid" ? "gradient" : "solid",
							})
						}
					/>
				)}

				{switchStyle !== "text" && (
					<ToggleControl
						label={__("Gradient Controller")}
						checked={controllerType === "gradient"}
						onChange={() =>
							setAttributes({
								controllerType:
									controllerType === "solid" ? "gradient" : "solid",
							})
						}
					/>
				)}
			</PanelBody>

			{switchStyle !== "text" && backgroundType === "solid" && (
				<PanelColorSettings
					title={__("Background Color")}
					initialOpen={false}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (backgroundColor) => setAttributes({ backgroundColor }),
							label: "",
						},
					]}
				/>
			)}

			{switchStyle !== "text" && backgroundType === "gradient" && (
				<PanelBody title={__("Background Gradient")} initialOpen={false}>
					<GradientColorController
						onChange={(backgroundGradient) =>
							setAttributes({ backgroundGradient })
						}
					/>
				</PanelBody>
			)}

			{switchStyle !== "text" && controllerType === "solid" && (
				<PanelColorSettings
					title={__("Controller Color")}
					initialOpen={false}
					colorSettings={[
						{
							value: controllerColor,
							onChange: (controllerColor) => setAttributes({ controllerColor }),
							label: "",
						},
					]}
				/>
			)}

			{switchStyle !== "text" && controllerType === "gradient" && (
				<PanelBody title={__("Controller Gradient")} initialOpen={false}>
					<GradientColorController
						onChange={(controllerGradient) =>
							setAttributes({ controllerGradient })
						}
					/>
				</PanelBody>
			)}

			<PanelColorSettings
				title={__(`${switchStyle === "text" ? "Colors" : "Label Colors"}`)}
				initialOpen={false}
				colorSettings={labelColors}
			/>

			<PanelBody title={__("Border")} initialOpen={false}>
				<SelectControl
					label={__("Border Style")}
					value={borderStyle}
					options={BORDER_STYLES}
					onChange={(borderStyle) => setAttributes({ borderStyle })}
				/>

				<ColorControl
					label={__("Border Color")}
					color={borderColor}
					onChange={(borderColor) => setAttributes({ borderColor })}
				/>

				<RangeControl
					label={__("Border Width")}
					value={borderWidth}
					onChange={(borderWidth) => setAttributes({ borderWidth })}
					min={0}
					max={17}
				/>

				{switchStyle === "text" && (
					<RangeControl
						label={__("Border Radius")}
						value={borderRadius}
						onChange={(borderRadius) => setAttributes({ borderRadius })}
						min={0}
						max={100}
					/>
				)}
			</PanelBody>

			{switchStyle !== "text" && (
				<PanelBody title={__("Shadow")} initialOpen={false}>
					<ColorControl
						label={__("Shadow Color")}
						color={shadowColor}
						onChange={(shadowColor) => setAttributes({ shadowColor })}
					/>

					<RangeControl
						label={__("Horizontal Offset")}
						value={hOffset}
						allowReset
						onChange={(hOffset) => setAttributes({ hOffset })}
						min={0}
						max={10}
					/>

					<RangeControl
						label={__("Vertical Offset")}
						value={vOffset}
						allowReset
						onChange={(vOffset) => setAttributes({ vOffset })}
						min={0}
						max={10}
					/>

					<RangeControl
						label={__("Blur")}
						value={blur}
						allowReset
						onChange={(blur) => setAttributes({ blur })}
						min={0}
						max={10}
					/>

					<RangeControl
						label={__(" Spread")}
						value={spread}
						allowReset
						onChange={(spread) => setAttributes({ spread })}
						min={0}
						max={10}
					/>

					<ToggleControl
						label={__("Inset")}
						checked={inset}
						onChange={() => setAttributes({ inset: !inset })}
					/>
				</PanelBody>
			)}
		</InspectorControls>
	);
};

export default Inspector;
