import { createRoot } from 'react-dom/client';
import React from 'react';

import store, { StateContext } from './store';
import App from './App';

// Style Note: There are CSS styles for body, html, and #root in the file 'index.ejs'

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
