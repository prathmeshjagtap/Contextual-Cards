import axios from "axios";

const getData = async (url) => {
	try {
		const response = await axios.get(url);
		if (response?.status === 200) {
			return response?.data?.card_groups;
		}
	} catch (error) {
		console.error(error);
	}
};

export { getData };
