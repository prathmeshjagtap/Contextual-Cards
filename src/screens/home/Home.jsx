import React, { useEffect, useState } from "react";
import { getData } from "../../utils";

function Home() {
	const url = "https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17";

	const [cardsArray, setCardArray] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await getData(url);
			setCardArray(response);
		})(url);
	}, [url]);

	console.log(cardsArray);
	return <div>Home</div>;
}

export { Home };
