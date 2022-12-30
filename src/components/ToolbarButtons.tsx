import React from 'react';
import { LineWeight } from '@styled-icons/material/LineWeight';
import { Link } from '@styled-icons/material/Link';
import { TippyProps } from '@tippyjs/react';
import {
  LineHeightToolbarDropdown,
  LinkToolbarButton,
} from '@udecode/plate';
// import { AlignToolbarButtons } from './align/AlignToolbarButtons';
// import { BasicElementToolbarButtons } from './basic-elements/BasicElementToolbarButtons';
import { BasicMarkToolbarButtons } from './BasicMarkToolbarButtons';
// import { IndentToolbarButtons } from './indent/IndentToolbarButtons';
// import { ListToolbarButtons } from './list/ListToolbarButtons';
// import { TableToolbarButtons } from './table/TableToolbarButtons';

export const ToolbarButtons = () => {
  const colorTooltip: TippyProps = { content: 'Text color' };
  const bgTooltip: TippyProps = { content: 'Text color' };

  return (
      <>
        {/*<BasicElementToolbarButtons />*/}
        {/*<ListToolbarButtons />*/}
        {/*<IndentToolbarButtons />*/}
        <BasicMarkToolbarButtons />
        <LineHeightToolbarDropdown icon={<LineWeight />} />
        {/*<AlignToolbarButtons />*/}
        <LinkToolbarButton icon={<Link />} />
        {/*<TableToolbarButtons />*/}
      </>
  );
};
