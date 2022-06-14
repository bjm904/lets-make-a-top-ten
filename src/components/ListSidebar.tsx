import React, { ReactElement, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';

import ListSidebarRow from './ListSidebarRow';
import { StateContext } from '../store';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 1,
  },
});

function ListSidebar(): ReactElement {
  const classes = useStyles();
  const store = useContext(StateContext);

  return (
    <div className={classes.root}>
      <div>
        <input type="button" onClick={(): void => store.init()} value="Reset State" />
        <input type="button" onClick={(): void => store.morphIt()} value="Morph State" />
      </div>

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
