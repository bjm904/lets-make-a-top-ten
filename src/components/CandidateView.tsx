import React, { ReactElement, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';

import { StateContext } from '../store';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
  },
});

function CandidateView(): ReactElement {
  const classes = useStyles();
  const store = useContext(StateContext);

  return (
    <div className={classes.root}>
      
    </div>
  );
}

export default observer(CandidateView);
