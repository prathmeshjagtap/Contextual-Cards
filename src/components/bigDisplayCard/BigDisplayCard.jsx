import React from "react";
import "./bigDisplayCard.css";
import { DisplayCard } from "./DisplayCard";

function BigDisplayCard({ cards, is_scrollable }) {
	return (
		<div
			style={{
				overflowX: is_scrollable ? "scroll" : "visible",
				margin: is_scrollable ? "1rem 0 1rem 1rem" : "1rem",
			}}
		>
			{cards.length > 0
				? cards.map((card) => <DisplayCard key={card?.name} card={card} />)
				: null}
		</div>
	);
}

export { BigDisplayCard };
