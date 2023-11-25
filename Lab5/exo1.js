
import React, { useState } from 'react';

export const ClickMeButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
};

export const ToggleButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {clicked ? 'Clicked' : 'Not Clicked'}
      </button>
    </div>
  );
};

export const AppButtons = () => {
  const [buttonClicked, setButtonClicked] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setButtonClicked(buttonNumber);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>Button1</button>
      <button onClick={() => handleButtonClick(2)}>Button2</button>
      <button onClick={() => handleButtonClick(3)}>Button3</button>
      {buttonClicked && <p>Button #{buttonClicked} was clicked</p>}
    </div>
  );
};

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={Increment}>Inc</button>
      <button onClick={Decrement}>Dec</button>
    </div>
  );
};
