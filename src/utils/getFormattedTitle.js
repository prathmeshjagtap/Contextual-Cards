const getFormattedTitle = ({ text, entities }) => {
	const title = `${text.replace(
		"{}",
		entities.map((item) => item.text).join(" ")
	)}`;
	return title;
};
export { getFormattedTitle };
