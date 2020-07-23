/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { PanelColorSettings } = wp.blockEditor;
const { RangeControl, BaseControl, Button, ButtonGroup } = wp.components;

/**
 * Internal dependencies
 */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { GRADIENT_TYPE, RADIAL_TYPES } from "./constants";
import ColorControl from "../color-control";

class GradientColorControl extends Component {
	state = {
		gradientType: "linear",
		colorOne: this.props.colorOne || "transparent",
		colorOnePosition: 0,
		colorTwo: this.props.colorTwo || "transparent",
		colorTwoPosition: 100,
		angle: this.props.angle || 0,
		radialShape: "ellipse",
		radialX: 50,
		radialY: 50,
	};

	getColorString = () => {
		const {
			colorOne,
			colorOnePosition,
			colorTwo,
			colorTwoPosition,
		} = this.state;

		return `${colorOne} ${colorOnePosition}% , ${colorTwo} ${colorTwoPosition}%`;
	};

	getRadialGradient = () => {
		const { radialShape, radialX, radialY } = this.state;
		return `radial-gradient(${radialShape} at ${radialX}% ${radialY}%, ${this.getColorString()})`;
	};

	getLinearGradient = () =>
		`linear-gradient(${this.state.angle}deg, ${this.getColorString()})`;

	generateString = () => {
		// Send linear or radial gradiant string to parent
		this.props.onChange(
			this.state.gradientType === "linear"
				? this.getLinearGradient()
				: this.getRadialGradient()
		);
	};

	onGradientChange = (attributeName, value) => {
		this.setState({ [attributeName]: value }, () => this.generateString());
	};

	render() {
		const {
			gradientType,
			colorOne,
			colorOnePosition,
			colorTwo,
			colorTwoPosition,
			angle,
			radialShape,
			radialX,
			radialY,
		} = this.state;

		return (
			<div>
				<BaseControl label={__("Gradient Type")}>
					<ButtonGroup>
						{GRADIENT_TYPE.map((item) => (
							<Button
								isSmall
								isPrimary={gradientType === item.value}
								isSecondary={gradientType !== item.value}
								onClick={() =>
									this.onGradientChange("gradientType", item.value)
								}
							>
								{item.label}
							</Button>
						))}
					</ButtonGroup>
				</BaseControl>

				{gradientType === "radial" && (
					<BaseControl label={__("Radial Type")}>
						<ButtonGroup>
							{RADIAL_TYPES.map((item) => (
								<Button
									isSmall
									isPrimary={radialShape === item.value}
									isSecondary={radialShape !== item.value}
									onClick={() =>
										this.onGradientChange("radialShape", item.value)
									}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>
				)}

				<ColorControl
					label={__("First Color")}
					color={colorOne}
					onChange={(newColor) => this.onGradientChange("colorOne", newColor)}
				/>

				<ColorControl
					label={__("Second Color")}
					color={colorTwo}
					onChange={(newColor) => this.onGradientChange("colorTwo", newColor)}
				/>

				<RangeControl
					label={__("First Color Position")}
					value={colorOnePosition}
					onChange={(newValue) =>
						this.onGradientChange("colorOnePosition", newValue)
					}
					min={0}
					max={100}
				/>

				<RangeControl
					label={__("Second Color Position")}
					value={colorTwoPosition}
					onChange={(newValue) =>
						this.onGradientChange("colorTwoPosition", newValue)
					}
					min={0}
					max={100}
				/>

				{gradientType === "linear" && (
					<RangeControl
						label={__("Angle")}
						value={angle}
						onChange={(newValue) => this.onGradientChange("angle", newValue)}
						min={0}
						max={360}
					/>
				)}

				{gradientType === "radial" && (
					<Fragment>
						<RangeControl
							label={__("Center X position")}
							value={radialX}
							onChange={(newValue) =>
								this.onGradientChange("radialX", newValue)
							}
							min={0}
							max={100}
						/>

						<RangeControl
							label={__("Center Y position")}
							value={radialY}
							onChange={(newValue) =>
								this.onGradientChange("radialY", newValue)
							}
							min={0}
							max={100}
						/>
					</Fragment>
				)}
			</div>
		);
	}
}

GradientColorControl.propTypes = {
	onChange: PropTypes.func.isRequired,
	colorOne: PropTypes.string,
	colorTwo: PropTypes.string,
	angle: PropTypes.number,
};

export default GradientColorControl;
