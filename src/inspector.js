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
	Button,
	Dropdown,
	TabPanel,
} = wp.components;
const { select } = wp.data;
const { useEffect, useState, useRef } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.blockEditor;

/**
 * Internal dependencies
 */
import {
	SWITCH_STYLES,
	SWITCH_SIZE,
	SEPERATOR_TYPE,
	BORDER_STYLES,
	INITIAL_CONTENT,
	TEXT_TRANSFORM,
	TEXT_DECORATION,
} from "./constants";
import UnitControl from "../util/unit-control";
import GradientColorController from "../util/gradient-color-controller";
import FontPicker from "../util/typography-control/FontPicker";
import ColorControl from "../util/color-control";
import ResetControl from "../util/reset-control";

import TypographyDropdown from "../util/typography-control-v2";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import ResponsiveRangeController from "../util/responsive-range-control";
import ImageAvatar from "../util/image-avatar/";
import BorderShadowControl from "../util/border-shadow-control";
import BackgroundControl from "../util/background-control";
import DealSocialProfiles from "../util/social-profiles-v2/DealSocialProfiles";

import IconList from "../util/faIcons";

import {
	TypographyIcon,
	// UserIcon,
	LeftAlignIcon,
	RightAlignIcon,
	CenterAlignIcon,
} from "../util/icons";

import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";

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

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
	}, []);

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
			<div className="eb-panel-control">
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
											label={__("Initial Content")}
											selected={initialContent}
											onChange={(initialContent) =>
												setAttributes({ initialContent })
											}
											options={INITIAL_CONTENT}
										/>

										<SelectControl
											label={__("Switch Type")}
											value={switchStyle}
											onChange={(switchStyle) => setAttributes({ switchStyle })}
											options={SWITCH_STYLES}
										/>

										{(switchStyle === "rounded" ||
											switchStyle === "reactangle") && (
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
												onChange={(buttonHeight) =>
													setAttributes({ buttonHeight })
												}
												min={10}
												max={100}
											/>
										)}

										{switchStyle === "toggle" && (
											<RangeControl
												label={__("Button Width")}
												value={buttonWidth}
												onChange={(buttonWidth) =>
													setAttributes({ buttonWidth })
												}
												min={10}
												max={100}
											/>
										)}

										{switchStyle === "text" && (
											<SelectControl
												label={__("Sepetator Type")}
												value={seperatorType}
												options={SEPERATOR_TYPE}
												onChange={(seperatorType) =>
													setAttributes({ seperatorType })
												}
											/>
										)}

										<UnitControl
											selectedUnit={headingSpaceUnit}
											unitTypes={[
												{ label: "px", value: "px" },
												{ label: "%", value: "%" },
											]}
											onClick={(headingSpaceUnit) =>
												setAttributes({ headingSpaceUnit })
											}
										/>

										<RangeControl
											label={__("Heading Space")}
											value={headingSpace}
											onChange={(headingSpace) =>
												setAttributes({ headingSpace })
											}
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
													label={__("Label Space")}
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
											title={__("Switch Background")}
											initialOpen={false}
										>
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

											{backgroundType === "solid" && (
												<PanelColorSettings
													title={__("Background Color")}
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
													title={__("Background Gradient")}
													// initialOpen={false}
												>
													<GradientColorController
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
											title={__("Controller Background")}
											initialOpen={false}
										>
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

											{controllerType === "solid" && (
												<PanelColorSettings
													title={__("Controller Color")}
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
													title={__("Controller Gradient")}
													// initialOpen={false}
												>
													<GradientColorController
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
												onChange={(borderRadius) =>
													setAttributes({ borderRadius })
												}
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
												onChange={(shadowColor) =>
													setAttributes({ shadowColor })
												}
											/>

											<ResetControl
												onReset={() => setAttributes({ hOffset: undefined })}
											>
												<RangeControl
													label={__("Horizontal Offset")}
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
													label={__("Vertical Offset")}
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
													label={__("Blur")}
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
													label={__(" Spread")}
													value={spread}
													onChange={(spread) => setAttributes({ spread })}
													min={0}
													max={10}
												/>
											</ResetControl>

											<ToggleControl
												label={__("Inset")}
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
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
