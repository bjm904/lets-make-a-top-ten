import React, { ReactElement, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';

import CandidateCard from './CandidateCard';
import { StateContext } from '../store';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
  },
});

function CandidateList(): ReactElement {
  const classes = useStyles();
  const store = useContext(StateContext);

  return (
    <div className={classes.root}>
      {store.state.candidates.map((candidate, i) => (
        <CandidateCard candidate={store.state.candidates[i]} key={candidate.id} />
      ))}
    </div>
  );
}

export default observer(CandidateList);
