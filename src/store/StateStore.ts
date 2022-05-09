import { makeAutoObservable } from 'mobx';
import localforage from 'localforage';
import Canidate from './Canidate';

const defaultState = {
  ready: false,
  canidates: [],
};

interface State {
  ready: boolean,
  canidates: Array<Canidate>,
}

class StateStore {
  state: State = defaultState;

  constructor(state: State = defaultState) {
    this.state = state;
    this.state.ready = true;

    makeAutoObservable(this);
  }

  addCanidate(canidate: Canidate): void {
    this.state.canidates.push(canidate);
    // This whole method is not needed?
  }
}

export type { State };

export default StateStore;
