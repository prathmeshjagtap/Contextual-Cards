import React from "react";
import { DisplayText } from "../index";
import "./smallDisplayCard.css";

function SmallDisplayCard({ cards, is_scrollable }) {
	// const calcWidth = (length) => {
	// 	let width = 100 / length;
	// 	return `${width - 10}%`;
	// };

	return (
		<div
			style={{
				overflowX: is_scrollable ? "scroll" : "visible",
				margin: is_scrollable ? "1rem 0 1rem 1rem" : "1rem",
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
							minWidth: is_scrollable
								? card.length === 1
									? "90%"
									: "60%"
								: "30%",
						}}
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
								<DisplayText text={card.formatted_title} />
							</h2>
						</div>
					</div>
				))}
		</div>
	);
}

export { SmallDisplayCard };
