import React, { ReactElement, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';

import { StateContext } from '../store';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
  },
});

const propTypes = {
  candidateId: PropTypes.string.isRequired,
};

type ListSidebarCandidateProps = PropTypes.InferProps<typeof propTypes>;

function ListSidebarCandidate({ candidateId }: ListSidebarCandidateProps): ReactElement {
  const classes = useStyles();
  const store = useContext(StateContext);

  const candidate = store.state.candidates.find((c) => c.id === candidateId);

  if (!candidate) {
    return (
      <div className={classes.root}>
        Candidate not found.
      </div>
    );
  }

  return (
    <div className={classes.root}>
      {candidate.title}
    </div>
  );
}

ListSidebarCandidate.propTypes = propTypes;

export default observer(ListSidebarCandidate);
