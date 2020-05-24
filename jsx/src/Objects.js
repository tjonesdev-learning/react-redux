// Import the React and ReactDOM libraries
import React from 'react';

// Create React component
const Objects = () => {
  const buttonText = {text: 'Click me'}; // Standard JS object, NOT JSX
  const labelText = 'Enter name:';

  return (
    <div>
      <label class="label" for="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {
          // {buttonText} throws error because Objects are not able to be used as text in JSX (unlike style objects which are not used as text)
        }
        {buttonText.text} 
        {
        // fixes error
        }
      </button>
    </div>
  );
}

export default Objects;