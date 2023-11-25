import React, { useState } from 'react';

const Divs = () => {
  const [divStyle, DivStyle] = useState({
    width: '100px',
    height: '100px',
    backgroundColor: 'grey',
  });

  const [newDiv, NewDiv] = useState({
    width: '',
    height: '',
    backgroundColor: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    NewDiv((prevDiv) => ({ ...prevDiv, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
  
    const newWidth = parseInt(newDiv.width, 10) || 100;
    const newHeight = parseInt(newDiv.height, 10) || 100;
  
    DivStyle({
      width: `${newWidth}px`,
      height: `${newHeight}px`,
      backgroundColor: newDiv.backgroundColor || 'grey',
    });
  };
  

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Width:
          <input
            type="text"
            name="width"
            value={newDiv.width}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={newDiv.height}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Background Color:
          <input
            type="text"
            name="backgroundColor"
            value={newDiv.backgroundColor}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Div</button>
      </form>

      <div style={divStyle}></div>
    </div>
  );
};

export default Divs;
