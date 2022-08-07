import React from "react";
import { DisplayText } from "../index";
import "./smallDisplayCard.css";

function SmallDisplayCard({ cards, is_scrollable }) {
	return (
		<div
			style={{
				overflowX: is_scrollable ? "scroll" : "visible",
				flexWrap: is_scrollable ? "nowrap" : "wrap",
			}}
			className="smallDisplayCard__container"
		>
			{cards &&
				cards.map((card) => (
					<div
						key={card?.url}
						className="smallDisplayCard"
						style={{
							backgroundColor: card?.bg_color,
							minWidth: is_scrollable ? "60%" : "none",
							flexGrow: "1",
						}}
						onClick={() => window.open(`${card.url}`, "_self")}
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
								<DisplayText
									formattedTitle={card.formatted_title}
									simpleTitle={card.title}
								/>
							</h2>
						</div>
					</div>
				))}
		</div>
	);
}

export { SmallDisplayCard };
