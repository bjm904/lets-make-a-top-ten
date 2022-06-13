import React, { ReactElement, useContext } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import { StateContext } from '../store';
import Candidate from '../store/Candidate';

const propTypes = {
  candidate: PropTypes.instanceOf(Candidate).isRequired,
};

type CandidateCardProps = PropTypes.InferProps<typeof propTypes>;

const CandidateCard = observer(({ candidate }: CandidateCardProps): ReactElement => {
  const state = useContext(StateContext);

  console.log('candidate render');
  return (
    <div>
      <br />
      <br />
      {candidate.title}
      <br />
      {candidate.details}
    </div>
  );
}

CandidateCard.propTypes = propTypes;

export default CandidateCard;
