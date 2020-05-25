import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

/* 
  const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return (
    <div>Latitude: </div>
  );
}; 
*/

// Re-factored to class based component
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { lat: null, errorMessage: '' };

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
        this.setState({
          lat: position.coords.latitude
        });
      },
			(err) => {
        this.setState({errorMessage: err.message});
      }
		);
	}

	render() {
		return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
