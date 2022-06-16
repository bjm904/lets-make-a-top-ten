import React, { ReactElement, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';

import CandidateList from './components/CandidateList';
import CandidateView from './components/CandidateView';
import ListSidebar from './components/ListSidebar';
import { StateContext } from './store';

const useStyles = createUseStyles({
  root: {
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
  },
  main: {
    height: '100%',
    flexGrow: 4,
    flexShrink: 1,
    flexBasis: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
});

function App(): ReactElement {
  const classes = useStyles();
  const store = useContext(StateContext);

  return (
    <div className={classes.root}>
      {store.state.ready ? (
        <>
          <ListSidebar />
          <div className={classes.main}>
            <CandidateView />
            <CandidateList />
          </div>
        </>
      ) : (
        <p>
          Loading...
        </p>
      )}
    </div>
  );
}

export default observer(App);
