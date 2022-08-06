import React from "react";
import { getFormattedTitle } from "../../utils";
import "./smallCardWithArrow.css";

function SmallCardWithArrow({ cards, is_scrollable }) {
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
						key={card?.url}
						className="smallCardWithArrow"
						onClick={() => window.open(`${card.url}`, "_blank")}
					>
						<div className="smallCardWithArrow__Info">
							<img
								src={card.icon.image_url}
								alt="SmallCardWithArrow__icon"
								className="smallCardWithArrow__icon"
							/>
							<h2 className="smallCardWithArrow__title">
								{getFormattedTitle(card.formatted_title)}
							</h2>
						</div>
						<svg
							width="10"
							height="16"
							viewBox="0 0 10 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="arrow__svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0.853731 0.688124C1.27047 0.300354 1.91599 0.300427 2.33265 0.688292L9.86835 7.70333C10.0439 7.86675 10.0439 8.13241 9.86835 8.29583L2.33307 15.3112C1.91622 15.6993 1.27032 15.6993 0.85346 15.3112V15.3112C0.392286 14.8819 0.392263 14.1514 0.853409 13.722L6.99957 7.99916L0.853508 2.27713C0.39236 1.8478 0.392462 1.11733 0.853731 0.688124V0.688124Z"
								fill="#1B1B1E"
							/>
						</svg>
					</div>
				))}
		</div>
	);
}

export { SmallCardWithArrow };
