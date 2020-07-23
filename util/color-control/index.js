const { __ } = wp.i18n;
const { useState, useEffect } = wp.element;
const { BaseControl, Dropdown, Tooltip, ColorPicker, Button } = wp.components;
import "./style.css";

const ColorControl = ({ label, color, onChange }) => {
	const [bgColor, setBgColor] = useState(color);

	useEffect(() => {
		setBgColor(color);
	}, [color]);

	const onChangeComplete = ({ rgb, hex }) => {
		let color = rgb ? `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})` : hex;
		onChange(color);
	};

	return (
		<BaseControl label={label || ""} className="eb-color-base">
			<Dropdown
				renderToggle={({ isOpen, onToggle }) => (
					<Tooltip text={color || "default"}>
						<div className="eb-color-ball">
							<div
								style={{
									height: 32,
									width: 32,
									borderRadius: "50%",
									boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
									backgroundColor: bgColor,
								}}
								aria-expanded={isOpen}
								onClick={onToggle}
								aria-label={color || "default"}
							></div>
						</div>
					</Tooltip>
				)}
				renderContent={() => (
					<ColorPicker
						color={color}
						onChangeComplete={(color) => onChangeComplete(color)}
					/>
				)}
			/>
			{bgColor && (
				<Button
					isSmall
					className="eb-color-undo"
					icon="image-rotate"
					onClick={() => onChange(undefined)}
				></Button>
			)}
		</BaseControl>
	);
};

export default ColorControl;
