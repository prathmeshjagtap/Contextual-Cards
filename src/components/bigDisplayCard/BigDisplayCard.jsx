import React from "react";
import { DisplayText } from "../index";
import "./bigDisplayCard.css";

function BigDisplayCard({ cards, is_scrollable }) {
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
						className="bigDisplayCard"
						key={card?.url}
						onClick={(e) => {
							e.stopPropagation();
							window.open(`${card.url}`, "_blank");
						}}
						style={{
							backgroundImage: `url(${card?.bg_image?.image_url})`,
							backgroundColor: card?.bg_color,
							aspectRatio: card.bg_image?.aspect_ratio,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
					>
						<h2 className="bigDisplayCard__title">
							<DisplayText text={card.formatted_title} />
						</h2>
						<h2 className="bigDisplayCard__description">
							<DisplayText text={card.formatted_description} />
						</h2>
						{card?.cta?.map((ctaButton) => (
							<button
								key={ctaButton?.text}
								onClick={(e) => {
									e.stopPropagation();
									window.open(`${ctaButton?.url}`, "_blank");
								}}
								style={{
									backgroundColor: ctaButton?.bg_color,
									color: ctaButton?.text_color,
								}}
								className="bigDisplayCard__button"
							>
								{ctaButton?.text}
							</button>
						))}
					</div>
				))}
		</div>
	);
}

export { BigDisplayCard };
