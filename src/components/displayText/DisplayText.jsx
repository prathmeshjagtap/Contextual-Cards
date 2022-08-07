import React from "react";
import { getFormattedText } from "../../utils";

function DisplayText({ formattedTitle, simpleTitle }) {
	const formattedText = formattedTitle
		? getFormattedText(formattedTitle)
		: [{ text: simpleTitle }];

	return (
		<>
			{formattedText &&
				formattedText.map((item) => (
					<span key={item?.text} style={{ color: item.color }}>
						{item.text}
					</span>
				))}
		</>
	);
}

export { DisplayText };
