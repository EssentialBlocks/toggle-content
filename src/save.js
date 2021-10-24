/**
 * WordPress dependencies
 */
const { InnerBlocks, RichText, useBlockProps } = wp.blockEditor;

/**
 * Internal dependencies
 */

const Save = ({ attributes }) => {
	const {
		blockId,

		//
		id,
		initialContent,
		switchStyle,
		switchSize,
		buttonWidth,
		seperatorType,
		activeColor,
		activeBg,
		primaryLabelText,
		secondaryLabelText,
		alignment,
		primaryLabelColor,
		secondaryLabelColor,
		backgroundType,
		backgroundColor,
		backgroundGradient,
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

	return (
		<div {...useBlockProps.save()}>
			<div
				className={`${blockId} eb-toggle-wrapper`}
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
							<label className="eb-text-switch-label" for={`eb-${id}`}>
								<div className="eb-text-switch-toggle"></div>
								<div className="eb-switch-names">
									<RichText.Content
										tagName="span"
										className="eb-toggle-primary-label-text"
										value={primaryLabelText}
									/>
									<RichText.Content
										tagName="span"
										className="eb-toggle-secondary-label-text"
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
						display: switchStyle !== "toggle" ? "block" : "none",
					}}
				>
					<RichText.Content
						tagName="span"
						className="eb-toggle-primary-label"
						value={primaryLabelText}
					/>
					<label className={`eb-toggle-switch toggle-${switchSize}`}>
						<input className="eb-toggle-input" type="checkbox" />
						<span className="eb-toggle-controller" />
						<span className="eb-toggle-slider" />
					</label>

					<span
						className={`eb-toggle-${seperatorType} eb-toggle-seperator`}
					></span>

					<RichText.Content
						tagName="span"
						className="eb-toggle-secondary-label"
						value={secondaryLabelText}
					/>
				</div>
				<div className="eb-toggle-content">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default Save;
