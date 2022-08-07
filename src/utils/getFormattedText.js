const getFormattedText = ({ text, entities }) => {
	const textArray = text.split("{}");
	if (textArray.length === 1) {
		return [{ text: text }];
	}
	let title = [];
	for (let i = 0; i < entities.length; i++) {
		title.push({ text: textArray[i] });
		title.push({ text: entities[i].text, color: entities[i].color });
	}
	return title;
};
export { getFormattedText };
