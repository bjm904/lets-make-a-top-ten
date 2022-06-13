import React, { ReactElement, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import CandidateList from './components/CandidateList';
import { StateContext } from './store';

const App = observer((): ReactElement => {
  const store = useContext(StateContext);

  return (
    <div>
      {store.state.ready ? (
        <>
          <input type="button" onClick={(): void => store.init()} value="Reset State" />
          <input type="button" onClick={(): void => store.morphIt()} value="Morph State" />
          <CandidateList />
        </>
      ) : (
        <p>
          Loading...
        </p>
      )}
    </div>
  );
});

export default App;
