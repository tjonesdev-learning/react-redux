import axios from "axios";

const KEY = "AIzaSyBEx_YYnT3R1K1LNmcrDHCtP4vcbaNQn1Y";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
