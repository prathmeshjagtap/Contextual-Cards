import React from "react";
import {
	BigDisplayCard,
	DynamicWidthCard,
	ImageCard,
	SmallCardWithArrow,
	SmallDisplayCard,
} from "../index";
function SelectCard({ cardGroup }) {
	switch (cardGroup.design_type) {
		case "HC1":
			return (
				<SmallDisplayCard
					cards={cardGroup.cards}
					is_scrollable={cardGroup.is_scrollable}
				/>
			);
		case "HC3":
			return (
				<BigDisplayCard
					cards={cardGroup.cards}
					is_scrollable={cardGroup.is_scrollable}
				/>
			);
		case "HC5":
			return (
				<ImageCard
					cards={cardGroup.cards}
					is_scrollable={cardGroup.is_scrollable}
				/>
			);
		case "HC6":
			return (
				<SmallCardWithArrow
					cards={cardGroup.cards}
					is_scrollable={cardGroup.is_scrollable}
				/>
			);
		case "HC9":
			return (
				<DynamicWidthCard
					cards={cardGroup.cards}
					is_scrollable={cardGroup.is_scrollable}
					height={cardGroup.height}
				/>
			);
		default:
			return null;
	}
}

export { SelectCard };
