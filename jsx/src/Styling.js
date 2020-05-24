// Import the React and ReactDOM libraries
import React from 'react';

// Create React component
const Styling = () => {
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

export default Styling;