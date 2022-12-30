import React from 'react';
import { Plate, TEditableProps } from '@udecode/plate';
import './App.css';

const editableProps: TEditableProps = {
  placeholder: 'Type...',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Plate id="test-id-late-js" editableProps={editableProps} />
      </header>
    </div>
  );
}

export default App;
