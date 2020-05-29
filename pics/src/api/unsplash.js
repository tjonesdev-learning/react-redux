import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID rA--XnOSUPKP82uVwcOq8737EM0MVqp4a7N39NdNYt8",
	},
});
