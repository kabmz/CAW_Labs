// App.js
import React from 'react';
import { useState } from 'react';
import {Login} from './exo3';
import Divs from './exo4';
import {
  ClickMeButton,
  ToggleButton,
  AppButtons,
  CounterApp,
} from './exo1';

import {
  DisplayTab,
  DisplayTabWithIndex,
  DisplayTabWithClick,
  ParametrizedDisplayTab,
} from './exo2';




const App = () => {
  const table1 = ["hello", "world", "from", "react"];
  const table2 = ["DAW", "IMVA", "ROC", "ALDI"];

  const [updatedTable1, setUpdatedTable1] = useState([...table1]);
  const [updatedTable2, setUpdatedTable2] = useState([...table2]);

  const handleElementClick = (index, table, setUpdatedTable) => {
   
    const updatedTable = [...table.slice(0, index), ...table.slice(index + 1)];
    setUpdatedTable(updatedTable);
    console.log(`Element at index ${index + 1} clicked. Updated table:`, updatedTable);

  };
  return (
    <div>
    {/* exo1 */}
      <ClickMeButton />
      <ToggleButton />
      <AppButtons />
      <CounterApp />
      
  {/* exo2 */}
      <DisplayTab table={table1} />
      <DisplayTabWithIndex table={table1} />
      <DisplayTabWithClick table={updatedTable1} onElementClick={(index) => handleElementClick(index, table1, setUpdatedTable1)} />
     <ParametrizedDisplayTab table={updatedTable2} onElementClick={(index) => handleElementClick(index, table2, setUpdatedTable2)} />
{/* exo3 */}
<Login />
{/* exo4 */}
<Divs />
</div>
     
  );
};

export default App;

