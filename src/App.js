import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage.js';
import useUpdateLogger from './useUpdateLogger.js';

function App() {
  const [name, setName] = useLocalStorage('name', '');
  useUpdateLogger(name);

  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
