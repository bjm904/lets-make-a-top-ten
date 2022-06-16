import React, { ReactElement, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';

import { StateContext } from '../store';

const useStyles = createUseStyles({
  root: {
    height: '100%',
    flexGrow: 1,
    flexShrink: 1,
    display: 'flex',
    alignItems: 'center',
  },
  imageContainer: {
    height: '100%',
    flexGrow: 0,
    flexShrink: 0,
    border: '1px solid black',
  },
  image: {
    width: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  candidateTitle: {
    flexGrow: 1,
    flexShrink: 1,
    textAlign: 'center',
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
      <div className={classes.imageContainer}>
        {candidate?.image && (
          <img alt="Candidate" className={classes.image} src={candidate?.image} />
        )}
      </div>
      <div className={classes.candidateTitle}>
        {candidate.title}
      </div>
    </div>
  );
}

ListSidebarCandidate.propTypes = propTypes;

export default observer(ListSidebarCandidate);
