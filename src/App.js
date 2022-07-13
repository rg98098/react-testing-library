import { useState } from 'react';
import './App.css';

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const [ disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div >
      <button 
        style={disabled? {backgroundColor: 'gray'}: {backgroundColor: buttonColor}}
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}>
        Change to {newButtonColor}
         
      </button>
      <input type="checkbox" id="disable-button-checkbox" defaultChecked={disabled} aria-checked={disabled} onChange={(e) => setDisabled(e.target.checked)} checked={disabled}/>
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
