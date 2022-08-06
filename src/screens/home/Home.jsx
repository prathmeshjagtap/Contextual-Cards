import React, { useEffect, useState } from "react";
import { SelectCard } from "../../components";
import { getData } from "../../utils";
import "./home.css";

function Home() {
	const url = "https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17";

	const [cardsArray, setCardArray] = useState([]);

	// public enum DesignTypes {
	//     SMALL_DISPLAY_CARD("HC1"),
	//     BIG_DISPLAY_CARD("HC3"),
	//     IMAGE_CARD("HC5"),
	//     SMALL_CARD_WITH_ARROW("HC6"),
	//         DYNAMIC_WIDTH_CARD("HC9")
	// }

	useEffect(() => {
		(async () => {
			const response = await getData(url);
			setCardArray(response);
		})();
	}, [url]);

	console.log(cardsArray);
	return (
		<div className="home__container">
			<div className="cards__container">
				{cardsArray &&
					cardsArray.map((cardGroup) => (
						<SelectCard key={cardGroup.id} cardGroup={cardGroup} />
					))}
			</div>
		</div>
	);
}

export { Home };
