import React, { ReactElement, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';

import CandidateList from './components/CandidateList';
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
          <input type="button" onClick={(): void => store.init()} value="Reset State" />
          <input type="button" onClick={(): void => store.morphIt()} value="Morph State" />
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
