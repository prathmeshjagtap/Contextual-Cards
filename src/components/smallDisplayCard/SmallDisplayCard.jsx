import React from "react";
import { getFormattedTitle } from "../../utils";
import "./smallDisplayCard.css";

function SmallDisplayCard({ cards, is_scrollable }) {
	return (
		<div
			style={{
				overflowX: is_scrollable ? "scroll" : "visible",
				margin: is_scrollable ? "1rem 0 1rem 1rem" : "1rem",
			}}
		>
			{cards &&
				cards.map((card) => (
					<div
						className="smallDisplayCard"
						style={{ backgroundColor: card?.bg_color }}
						onClick={() => window.open(`${card.url}`, "_blank")}
					>
						<img
							src={card.icon.image_url}
							alt="smallDisplayCard__icon"
							className="smallDisplayCard__icon"
							style={{
								aspectRatio: card?.icon?.aspect_ratio,
							}}
						/>
						<div>
							<h2 className="smallDisplayCard__title">
								{getFormattedTitle(card.formatted_title)}
							</h2>
						</div>
					</div>
				))}
		</div>
	);
}

export { SmallDisplayCard };
