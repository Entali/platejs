import React, {useState} from 'react';
import { Plate } from '@udecode/plate';
import { editableProps } from './common/editableProps';
import { MyParagraphElement, MyValue } from './typescript/plateTypes';
import './App.css';

const initialValue = [
  {
    type: 'p',
    children: [{ text: 'My name is Nata' }],
  } as MyParagraphElement,
];

function App() {
  const [value, setValue] = useState<MyValue | null>(null);
  console.log('value', value);

  return (
    <div className="App">
      <header className="App-header">
        <Plate<MyValue>
          id="unique-id"
          editableProps={editableProps}
          initialValue={initialValue}
          onChange={(newValue) => setValue(newValue)}
        />
      </header>
    </div>
  );
}

export default App;
