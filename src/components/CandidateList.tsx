import React, { ReactElement, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import CandidateCard from './CandidateCard';
import { StateContext } from '../store';

const CandidateList = observer((): ReactElement => {
  const state = useContext(StateContext);

  console.log('canidiate list render')
  return (
    <div>
      {state.candidates.map((candidate) => (
        <CandidateCard candidate={candidate} />
      ))}
    </div>
  );
});

export default CandidateList;
