import React from 'react';
import { createRoot } from 'react-dom/client';
import { when } from 'mobx';
import App from './App';
import Canidate from './store/Canidate';
import store from './store';

// I know you'll see this but for the love of god, dont block the initial render
await when(() => store.state.ready);

// Test state persistence
store.addCanidate(new Canidate({ title: Date.now().toString() }));

// root element will always be there. I am comfortable with the assertion in this case
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(window.document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export {};
