//  getToShowCards filters out all dismissed cards when refreshed

const getToShowCards = (data, dismissedCards) => {
	const response = data.map((item) => {
		if (item.design_type === "HC3") {
			let newCards = item.cards.filter((item) => {
				if (dismissedCards.includes(item.name)) {
					return null;
				} else {
					return item;
				}
			});
			let newObj = { ...item, cards: newCards };
			return newObj;
		} else {
			return item;
		}
	});
	return response;
};
export { getToShowCards };
