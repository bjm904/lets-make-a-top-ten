import localforage from 'localforage';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import initLocalforage from './initLocalforage';

initLocalforage();

/*localforage.setItem('somekey', 'some value').then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
});*/

localforage.getItem('somekey').then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
});

// root element will always be there. I am comfortable with the assertion in this case
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(window.document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export {};
