import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
	state = {
		images: [],
	};

	async onSearchSubmit(term) {
		const response = await axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization: "Client-ID rA--XnOSUPKP82uVwcOq8737EM0MVqp4a7N39NdNYt8",
			},
		});
		/* PROMISE method for returning data following API request
		}).then((response) => {
			console.log(response.data.results)
		}); 

		REFACTORED WITH ASYNC AWAIT
		*/
		this.setState({ images: response.data.results });
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				Found: {this.state.images.length} images
			</div>
		);
	}
}

export default App;
