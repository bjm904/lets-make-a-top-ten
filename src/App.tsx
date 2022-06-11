import React, { ReactElement } from 'react';
import store from './store';

const onClick = (): void => store.init();

function App(): ReactElement {
  return (
    <div>
      Im reacting
      <input type="button" onClick={onClick} value="Reset State" />
    </div>
  );
}

export default App;
