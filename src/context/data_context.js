import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../utils";

const dataContext = createContext(null);

const useDataContext = () => useContext(dataContext);

function DataProvider({ children }) {
	const url = "https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17";

	const [cardsArray, setCardArray] = useState({
		cardsData: [],
		dismissedCards: [],
	});

	useEffect(() => {
		(async () => {
			const response = await getData(url);
			setCardArray({ ...cardsArray, cardsData: response });
		})();
	}, [url]);

	return (
		<dataContext.Provider value={{ cardsArray, setCardArray }}>
			{children}
		</dataContext.Provider>
	);
}

export { DataProvider, useDataContext };
