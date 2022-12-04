/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	PanelBody,
	RadioControl,
	RangeControl,
	SelectControl,
	ToggleControl,
	TabPanel,
} from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */
import {
	SWITCH_STYLES,
	SWITCH_SIZE,
	SEPERATOR_TYPE,
	BORDER_STYLES,
	INITIAL_CONTENT,
	// TEXT_TRANSFORM,
	// TEXT_DECORATION,
} from "./constants";

import {
	rangeButtonWidth,
	rangeButtonHeight,
	rangeHeadingSpace,
} from "./constants/rangeNames";

import { WrpBgConst } from "./constants/backgroundsConstants";

import { WrpBdShadowConst } from "./constants/borderShadowConstants";

const {
	UnitControl,
	GradientColorControl,
	ColorControl,
	ResetControl,
	TypographyDropdown,
	ResponsiveDimensionsControl,
	ResponsiveRangeController,
	BorderShadowControl,
	BackgroundControl,
	AdvancedControls,
} = window.EBToggleContentControls;

import objAttributes from "./attributes";

import {
	// typoPrefix_name,
	// typoPrefix_job,
	typoPrefix_tgl,
} from "./constants/typographyPrefixConstants";

import {
	tglWrapMarginConst,
	tglWrapPaddingConst,
} from "./constants/dimensionsConstants";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		resOption,

		//
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
	} = attributes;

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes,
	};

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

	return (
		<InspectorControls key="controls">
			<span className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{ name: "general", title: "General", className: "eb-tab general" },
						{ name: "styles", title: "Style", className: "eb-tab styles" },
						{ name: "advance", title: "Advanced", className: "eb-tab advance" },
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody>
										<RadioControl
											label={__("Initial Content", "essential-blocks")}
											selected={initialContent}
											onChange={(initialContent) =>
												setAttributes({ initialContent })
											}
											options={INITIAL_CONTENT}
										/>

										<SelectControl
											label={__("Switch Type", "essential-blocks")}
											value={switchStyle}
											onChange={(switchStyle) => setAttributes({ switchStyle })}
											options={SWITCH_STYLES}
										/>

										{(switchStyle === "rounded" ||
											switchStyle === "reactangle") && (
											<SelectControl
												label={__("Switch Size", "essential-blocks")}
												value={switchSize}
												options={SWITCH_SIZE}
												onChange={(switchSize) => setAttributes({ switchSize })}
											/>
										)}

										{switchStyle === "toggle" && (
											<>
												<ResponsiveRangeController
													noUnits
													baseLabel={__("Button Height", "essential-blocks")}
													controlName={rangeButtonHeight}
													resRequiredProps={resRequiredProps}
													min={10}
													max={200}
													step={1}
												/>

												<ResponsiveRangeController
													baseLabel={__("Button Width", "essential-blocks")}
													controlName={rangeButtonWidth}
													resRequiredProps={resRequiredProps}
													min={10}
													max={100}
													step={1}
												/>
											</>
										)}

										{switchStyle === "text" && (
											<SelectControl
												label={__("Sepetator Type", "essential-blocks")}
												value={seperatorType}
												options={SEPERATOR_TYPE}
												onChange={(seperatorType) =>
													setAttributes({ seperatorType })
												}
											/>
										)}

										<ResponsiveRangeController
											baseLabel={__("Heading Space", "essential-blocks")}
											controlName={rangeHeadingSpace}
											resRequiredProps={resRequiredProps}
											min={10}
											max={100}
											step={1}
										/>

										{(switchStyle === "rectangle" ||
											switchStyle === "rounded") && (
											<>
												<UnitControl
													selectedUnit={labelSpaceUnit}
													unitTypes={[
														{ label: "px", value: "px" },
														{ label: "%", value: "%" },
													]}
													onClick={(labelSpaceUnit) =>
														setAttributes({ labelSpaceUnit })
													}
												/>

												<RangeControl
													label={__("Label Space", "essential-blocks")}
													value={labelSpace}
													onChange={(labelSpace) =>
														setAttributes({ labelSpace })
													}
												/>
											</>
										)}

										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_tgl}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelColorSettings
										title={__(
											`${switchStyle === "text" ? "Colors" : "Label Colors"}`
										)}
										// initialOpen={false}
										colorSettings={labelColors}
									/>

									{switchStyle !== "text" && (
										<PanelBody
											title={__("Switch Background", "essential-blocks")}
											initialOpen={false}
										>
											<ToggleControl
												label={__("Gradient Background", "essential-blocks")}
												checked={backgroundType === "gradient"}
												onChange={() =>
													setAttributes({
														backgroundType:
															backgroundType === "solid" ? "gradient" : "solid",
													})
												}
											/>

											{backgroundType === "solid" && (
												<PanelColorSettings
													title={__("Background Color", "essential-blocks")}
													// initialOpen={false}
													colorSettings={[
														{
															value: backgroundColor,
															onChange: (backgroundColor) =>
																setAttributes({ backgroundColor }),
															label: "",
														},
													]}
												/>
											)}

											{backgroundType === "gradient" && (
												<PanelBody
													title={__("Background Gradient", "essential-blocks")}
													// initialOpen={false}
												>
													<GradientColorControl
														gradientColor={
															backgroundGradient ||
															"linear-gradient(45deg,#eef2f3,#8e92ab)"
														}
														onChange={(backgroundGradient) =>
															setAttributes({ backgroundGradient })
														}
													/>
												</PanelBody>
											)}
										</PanelBody>
									)}

									{switchStyle !== "text" && (
										<PanelBody
											title={__("Controller Background", "essential-blocks")}
											initialOpen={false}
										>
											<ToggleControl
												label={__("Gradient Controller", "essential-blocks")}
												checked={controllerType === "gradient"}
												onChange={() =>
													setAttributes({
														controllerType:
															controllerType === "solid" ? "gradient" : "solid",
													})
												}
											/>

											{controllerType === "solid" && (
												<PanelColorSettings
													title={__("Controller Color", "essential-blocks")}
													// initialOpen={false}
													colorSettings={[
														{
															value: controllerColor,
															onChange: (controllerColor) =>
																setAttributes({ controllerColor }),
															label: "",
														},
													]}
												/>
											)}

											{controllerType === "gradient" && (
												<PanelBody
													title={__("Controller Gradient", "essential-blocks")}
													// initialOpen={false}
												>
													<GradientColorControl
														gradientColor={
															controllerGradient ||
															"linear-gradient(45deg,#eef2f3,#8e92ab)"
														}
														onChange={(controllerGradient) =>
															setAttributes({ controllerGradient })
														}
													/>
												</PanelBody>
											)}
										</PanelBody>
									)}

									<PanelBody
										title={__("Border", "essential-blocks")}
										initialOpen={false}
									>
										<SelectControl
											label={__("Border Style", "essential-blocks")}
											value={borderStyle}
											options={BORDER_STYLES}
											onChange={(borderStyle) => setAttributes({ borderStyle })}
										/>

										<ColorControl
											label={__("Border Color", "essential-blocks")}
											color={borderColor}
											onChange={(borderColor) => setAttributes({ borderColor })}
										/>

										<RangeControl
											label={__("Border Width", "essential-blocks")}
											value={borderWidth}
											onChange={(borderWidth) => setAttributes({ borderWidth })}
											min={0}
											max={17}
										/>

										{switchStyle === "text" && (
											<RangeControl
												label={__("Border Radius", "essential-blocks")}
												value={borderRadius}
												onChange={(borderRadius) =>
													setAttributes({ borderRadius })
												}
												min={0}
												max={100}
											/>
										)}
									</PanelBody>

									{switchStyle !== "text" && (
										<PanelBody
											title={__("Shadow", "essential-blocks")}
											initialOpen={false}
										>
											<ColorControl
												label={__("Shadow Color", "essential-blocks")}
												color={shadowColor}
												onChange={(shadowColor) =>
													setAttributes({ shadowColor })
												}
											/>

											<ResetControl
												onReset={() => setAttributes({ hOffset: undefined })}
											>
												<RangeControl
													label={__("Horizontal Offset", "essential-blocks")}
													value={hOffset}
													onChange={(hOffset) => setAttributes({ hOffset })}
													min={0}
													max={10}
												/>
											</ResetControl>

											<ResetControl
												onReset={() => setAttributes({ vOffset: undefined })}
											>
												<RangeControl
													label={__("Vertical Offset", "essential-blocks")}
													value={vOffset}
													onChange={(vOffset) => setAttributes({ vOffset })}
													min={0}
													max={10}
												/>
											</ResetControl>

											<ResetControl
												onReset={() => setAttributes({ blur: undefined })}
											>
												<RangeControl
													label={__("Blur", "essential-blocks")}
													value={blur}
													onChange={(blur) => setAttributes({ blur })}
													min={0}
													max={10}
												/>
											</ResetControl>

											<ResetControl
												onReset={() => setAttributes({ spread: undefined })}
											>
												<RangeControl
													label={__(" Spread", "essential-blocks")}
													value={spread}
													onChange={(spread) => setAttributes({ spread })}
													min={0}
													max={10}
												/>
											</ResetControl>

											<ToggleControl
												label={__("Inset", "essential-blocks")}
												checked={inset}
												onChange={() => setAttributes({ inset: !inset })}
											/>
										</PanelBody>
									)}
								</>
							)}
							{tab.name === "advance" && (
								<>
									<PanelBody
										title={__("Margin & Padding")}
										// initialOpen={true}
									>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={tglWrapMarginConst}
											baseLabel="Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={tglWrapPaddingConst}
											baseLabel="Padding"
										/>
									</PanelBody>

									<PanelBody
										title={__("Background ", "essential-blocks")}
										initialOpen={false}
									>
										<BackgroundControl
											controlName={WrpBgConst}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>

									<PanelBody title={__("Border & Shadow")} initialOpen={false}>
										<BorderShadowControl
											controlName={WrpBdShadowConst}
											resRequiredProps={resRequiredProps}
											// noShadow
											// noBorder
										/>
									</PanelBody>

									<AdvancedControls
										attributes={attributes}
										setAttributes={setAttributes}
									/>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</span>
		</InspectorControls>
	);
};

export default Inspector;
