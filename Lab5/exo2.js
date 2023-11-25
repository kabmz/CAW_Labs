import React, { useState } from 'react';


const DisplayTab = ({ table }) => {
  return (
    <ul>
      {table.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};


const DisplayTabWithIndex = ({ table }) => {
  return (
    <ul>
      {table.map((item, index) => (
        <li key={index}>Element {index + 1} is: {item}</li>
      ))}
    </ul>
  );
};

const DisplayTabWithClick = ({ table, onElementClick }) => {
    const handleItemClick = (index) => {
      onElementClick(index);
    };
  
    return (
      <ul>
        {table.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            Element {index + 1} is: {item}
          </li>
        ))}
      </ul>
    );
  };
  

  const ParametrizedDisplayTab = ({ table, onElementClick }) => {
    const handleItemClick = (index) => {
      onElementClick(index);
    };
  
    return (
      <ul>
        {table.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            Element {index + 1} is: {item}
          </li>
        ))}
      </ul>
    );
  };

export { DisplayTab, DisplayTabWithIndex, DisplayTabWithClick, ParametrizedDisplayTab };

