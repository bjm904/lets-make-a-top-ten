import React, { ReactElement, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';

import FileLoaderPlayground from './FileLoaderPlayground';
import ListSidebarRow from './ListSidebarRow';
import { StateContext } from '../store';

const useStyles = createUseStyles({
  root: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
});

function ListSidebar(): ReactElement {
  const classes = useStyles();
  const store = useContext(StateContext);

  return (
    <div className={classes.root}>
      <FileLoaderPlayground />

      {store.activeList.slots.map((slot, i) => (
        <ListSidebarRow
          // Justification for index in key - This list will never be re-ordered
          // eslint-disable-next-line react/no-array-index-key
          key={`slot${i}`}
          slotIndex={i}
          slotType="slot"
        />
      ))}
      {store.activeList.mentions.map((mention, i) => (
        <ListSidebarRow
          // Justification for index in key - This list will never be re-ordered
          // eslint-disable-next-line react/no-array-index-key
          key={`mention${i}`}
          slotIndex={i}
          slotType="mention"
        />
      ))}
    </div>
  );
}

export default observer(ListSidebar);
