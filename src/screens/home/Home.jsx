import React from "react";
import { Navbar, SelectCard } from "../../components";
import { getData, getToShowCards } from "../../utils";
import "./home.css";
import PullToRefresh from "react-simple-pull-to-refresh";
import { useDataContext } from "../../context";

function Home() {
	const { cardsArray, setCardArray } = useDataContext();
	const { cardsData, dismissedCards } = cardsArray;

	// Change URL here and in context to test on different data from backend
	const url = "https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17";

	const handleRefresh = async () => {
		const response = await getData(url);
		let toShowCards = getToShowCards(response, dismissedCards);
		setCardArray({ ...cardsArray, cardsData: toShowCards });
	};

	return (
		<PullToRefresh onRefresh={handleRefresh}>
			<div className="home__container">
				<Navbar />
				<div className="cards__container">
					{cardsData &&
						cardsData.map((cardGroup) => (
							<SelectCard key={cardGroup.id} cardGroup={cardGroup} />
						))}
				</div>
			</div>
		</PullToRefresh>
	);
}

export { Home };
