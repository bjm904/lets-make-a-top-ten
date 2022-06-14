import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';

import Candidate from '../store/Candidate';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
  },
});

const propTypes = {
  candidate: PropTypes.instanceOf(Candidate).isRequired,
};

type CandidateCardProps = PropTypes.InferProps<typeof propTypes>;

function CandidateCard({ candidate }: CandidateCardProps): ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br />
      {candidate.image && (
        <img alt="Candidate" src={candidate.image} />
      )}
      <br />
      {candidate.title}
      <br />
      {candidate.details}
    </div>
  );
}

CandidateCard.propTypes = propTypes;

export default observer(CandidateCard);
