import React, {useRef, useState} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createHeadingPlugin,
  createItalicPlugin,
  createParagraphPlugin,
  createStrikethroughPlugin,
  createUnderlinePlugin,
  Plate,
  PlateProvider,
  HeadingToolbar,
} from '@udecode/plate';
import { editableProps } from './common/editableProps';
import { MyValue, MyPlatePlugin } from './typescript/plateTypes';
import './App.css';
import { ToolbarButtons } from "./components/ToolbarButtons";

const plugins: MyPlatePlugin[] = [
  createParagraphPlugin(),
  createBlockquotePlugin(),
  createCodeBlockPlugin(),
  createHeadingPlugin(),

  createBoldPlugin(),
  createItalicPlugin(),
  createUnderlinePlugin(),
  createStrikethroughPlugin(),
  createCodePlugin(),
];

const styles: Record<string, React.CSSProperties> = {
  container: { position: 'relative' },
};

function App() {
  const [value, setValue] = useState<MyValue | null>(null);
  console.log('value', value);
  const containerRef = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <DndProvider backend={HTML5Backend}>
          <PlateProvider<MyValue> plugins={plugins}>
            <HeadingToolbar>
              <ToolbarButtons />
            </HeadingToolbar>

            <div ref={containerRef} style={styles.container}>
              <Plate
                id="plate-id"
                onChange={(v) => setValue(v)}
                editableProps={editableProps}>
                <p>text</p>
              </Plate>
            </div>
          </PlateProvider>
        </DndProvider>
      </header>
    </div>
  );
}

export default App;
