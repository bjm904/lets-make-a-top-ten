import React, { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';

import Candidate from '../store/Candidate';

const propTypes = {
  candidate: PropTypes.instanceOf(Candidate).isRequired,
};

type CandidateCardProps = PropTypes.InferProps<typeof propTypes>;

const CandidateCard = observer(({ candidate }: CandidateCardProps): ReactElement => (
  <div>
    <br />
    <br />
    {candidate.title}
    <br />
    {candidate.details}
  </div>
));

// CandidateCard.propTypes = propTypes;

export default CandidateCard;
