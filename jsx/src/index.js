// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import HelloThere from './HelloThere';
import Styling from './Styling';
import Variables from './Variables';
import Functions from './Functions';
import Objects from './Objects';

const App = () => {
  return (
    <div>
      <HelloThere />
      <Styling />
      <Variables />
      <Functions />
      <Objects />
    </div>
  );
}

// Display React component to DOM
ReactDOM.render(<App />, document.querySelector('#root'));