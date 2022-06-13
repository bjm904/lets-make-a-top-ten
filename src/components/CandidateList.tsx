import React, { ReactElement, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import CandidateCard from './CandidateCard';
import { StateContext } from '../store';

const CandidateList = observer((): ReactElement => {
  const store = useContext(StateContext);

  return (
    <div>
      {store.state.candidates.map((candidate, i) => (
        <CandidateCard candidate={store.state.candidates[i]} key={candidate.id} />
      ))}
    </div>
  );
});

export default CandidateList;
