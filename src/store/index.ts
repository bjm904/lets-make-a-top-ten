import { autorun, configure, toJS } from 'mobx';
import { createContext } from 'react';
import localforage from 'localforage';

import StateStore, { State } from './StateStore';
import initLocalforage from './initLocalforage';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

const stateVersion = 1.0;

initLocalforage(stateVersion);

const storedState: State | undefined = await localforage.getItem('state') || undefined;
// There's no error catch for localforage.getItem
// What about state versions?

const store = new StateStore(storedState);

autorun(() => {
  localforage.setItem('state', toJS(store.state)).then((value) => {
    console.log('Updated state in storage', value);
  }).catch((err) => {
    console.log(err);
  });
});

export default store;

/*
MobX reccommends using react context for passing state around.

"Using observables directly works very well, but since this typically introduces module state,
this pattern might complicate unit testing. Instead, we recommend using React Context instead."
https://mobx.js.org/react-integration.html
*/

const StateContext = createContext(store);

export { StateContext };
