import React from "react";
import "./dynamicWidthCard.css";

function DynamicWidthCard({ cards, is_scrollable, height }) {
	return (
		<div
			style={{
				overflowX: is_scrollable ? "scroll" : "visible",
				margin: is_scrollable ? "1rem 0 1rem 1rem" : "1rem",
			}}
			className="dynamicCard__Container"
		>
			{cards &&
				cards.map((card) => (
					<img
						key={card?.url}
						onClick={() => window.open(`${card.url}`, "_self")}
						src={card.bg_image?.image_url}
						alt="dynamicCardBackground"
						style={{
							aspectRatio: card.bg_image?.aspect_ratio,
							maxHeight: `${height}px`,
						}}
						className="dynamicCardBackground"
					/>
				))}
		</div>
	);
}

export { DynamicWidthCard };
