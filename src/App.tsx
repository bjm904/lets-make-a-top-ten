import React, { ReactElement, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';

import CandidateList from './components/CandidateList';
import CandidateView from './components/CandidateView';
import ListSidebar from './components/ListSidebar';
import { StateContext } from './store';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
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
          <CandidateView />
          <CandidateList />
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
