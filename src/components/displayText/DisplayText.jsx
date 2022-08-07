import React from "react";
import { getFormattedText } from "../../utils";

function DisplayText({ text }) {
	const formattedText = getFormattedText(text);

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
