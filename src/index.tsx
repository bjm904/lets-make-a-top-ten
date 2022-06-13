import React from 'react';
import { createRoot } from 'react-dom/client';
import { when } from 'mobx';
import App from './App';
import store, { StateContext } from './store';

// I know you'll see this but for the love of god, dont block the initial render
await when(() => store.state.ready);

// root element will always be there. I am comfortable with the assertion in this case
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(window.document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <StateContext.Provider value={store}>
      <App />
    </StateContext.Provider>
  </React.StrictMode>,
);

export {};
