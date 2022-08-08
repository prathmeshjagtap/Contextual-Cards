import React from "react";
import { Navbar, SelectCard } from "../../components";
import { getData, getToShowCards } from "../../utils";
import "./home.css";
import PullToRefresh from "react-simple-pull-to-refresh";
import { useDataContext } from "../../context";
import { url } from "../../url";

function Home() {
	const { cardsArray, setCardArray } = useDataContext();
	const { cardsData, dismissedCards } = cardsArray;

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
