import React, { useState } from 'react';

import './HomePage.scss';

const BUTTONS = [7, 8, 9, '+', 6, 5, 4, '-', 3, 2, 1, '*', 'C', '0', '=', '/'];

const calculate = (operation, inputValue, setInputValue, setClassName) => {
  const lastChar = inputValue[inputValue.length - 1];

  if (inputValue.length >= 17) setClassName('long');

  if (operation === 'C') {
    setInputValue('');
  } else if (operation === '=') {
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
      return false;
    } else { // eslint-disable-line
      setInputValue(eval(inputValue)); // eslint-disable-line
    }
  } else if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
    if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
      setInputValue(inputValue);
    } else {
      setInputValue(inputValue + operation);
    }
  } else {
    setInputValue(inputValue + operation);
  }
};

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [className, setClassName] = useState('');
  const result = useState('');

  return (
    <section>
      <div className="display-wrapper">
        <p>=</p>
        <input
          type="text"
          name="output"
          className={`output ${className}`}
          value={inputValue}
        />
      </div>

      <div className="buttons-wrapper">
        {
         BUTTONS.map(operation => (
           <button
             type="button"
             key={operation}
             onClick={() => calculate(operation, inputValue, setInputValue, setClassName)}
           >
             {operation}
           </button>
         ))
        }
      </div>
    </section>
  );
};

export default HomePage;
