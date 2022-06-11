import React, { ReactElement } from 'react';
import CandidateList from './components/CandidateList';
import store from './store';

const onClick = (): void => store.init();
const onClick2 = (): void => {
  store.state.candidates[0].details = Date.now().toString();
};

function App(): ReactElement {
  return (
    <div>
      Im reacting
      <input type="button" onClick={onClick} value="Reset State" />
      <input type="button" onClick={onClick2} value="Morph State" />
      <CandidateList />
    </div>
  );
}

export default App;
