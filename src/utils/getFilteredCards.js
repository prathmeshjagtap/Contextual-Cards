// getFilteredCards is used to remove HC3 Card when card remind later action is Pressed

const getFilteredCards = (data, card) => {
	const response = data.map((item) => {
		if (item.design_type === "HC3") {
			let newCards = item.cards.filter((item) => item.name !== card.name);
			let newObj = { ...item, cards: newCards };
			return newObj;
		} else {
			return item;
		}
	});
	return response;
};

export { getFilteredCards };
