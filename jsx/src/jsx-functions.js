// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React component
const getButtonText = () => {
  return 'Click on me!';
}

const App = () => {
  return (
    <div>
      <label class="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {getButtonText()}
      </button>
    </div>
  );
}

// Display React component to DOM
ReactDOM.render(<App />, document.querySelectory('#root'));