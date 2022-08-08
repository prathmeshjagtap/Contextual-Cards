import { createContext, useContext, useEffect, useState } from "react";
import { url } from "../url";
import { getData } from "../utils";

const dataContext = createContext(null);

const useDataContext = () => useContext(dataContext);

function DataProvider({ children }) {
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
