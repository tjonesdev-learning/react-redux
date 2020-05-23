// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React component
const App = () => {
  return (
    <div>
      <label class="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        Submit
      </button>
    </div>
  );
}

// Display React component to DOM
ReactDOM.render(<App />, document.querySelectory('#root'));

// **NOTE on Common conventions:**

// Double quotes ("") for JSX properties (i.e. <label for="name"></label>)
// Single quotes ('') for non-JSX (i.e. style={{color='white'}})

// Use "className" instead of "class" in JSX to avoid collisions over Javascript "class"