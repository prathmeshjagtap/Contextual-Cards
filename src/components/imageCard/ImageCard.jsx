import React from "react";
import "./imageCard.css";

function ImageCard({ cards, is_scrollable }) {
	return (
		<div
			style={{
				overflowX: is_scrollable ? "scroll" : "visible",
			}}
			className="imageCard__container"
		>
			{cards &&
				cards.map((card) => (
					<div
						key={card?.url}
						onClick={() => window.open(`${card.url}`, "_self")}
						style={{
							minWidth: is_scrollable ? "100%" : "none",
							flexGrow: "1",
						}}
					>
						<img
							src={card.bg_image?.image_url}
							alt="ImageCard"
							style={{
								aspectRatio: card.bg_image?.aspect_ratio,
								backgroundColor: card?.bg_color,
							}}
							className="imageCard__image"
						/>
					</div>
				))}
		</div>
	);
}

export { ImageCard };
