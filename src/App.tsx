import React from 'react';
import { Plate } from '@udecode/plate';
import { editableProps } from './common/editableProps';
import { MyParagraphElement, MyValue } from './typescript/plateTypes';
import './App.css';

const initialValue = [
  {
    type: 'p',
    children: [
      {
        text:
            'This is editable plain text with react and history plugins, just like a <textarea>!',
      },
    ],
  } as MyParagraphElement,
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Plate<MyValue>
          id="unique-id"
          editableProps={editableProps}
          initialValue={initialValue}
        />
      </header>
    </div>
  );
}

export default App;
