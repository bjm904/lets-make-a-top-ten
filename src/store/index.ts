import { autorun, toJS } from 'mobx';
import localforage from 'localforage';
import StateStore, { State } from './StateStore';
import initLocalforage from './initLocalforage';

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
