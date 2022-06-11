import { makeAutoObservable } from 'mobx';
import Canidate from './Canidate';
import List from './List';
import defaultStateJSON from './defaultState.json';

interface State {
  ready: boolean,
  canidates: Array<Canidate>,
  lists: Array<List>,
}

// TODO: Write test to strictly validate defaultState.json types
const defaultStateConfig: State = defaultStateJSON;

const emptyState: State = {
  ready: false,
  canidates: [],
  lists: [],
};

class StateStore {
  state: State = emptyState;

  constructor(stateConfig: State = defaultStateConfig) {
    this.init(stateConfig);

    this.state.ready = true;

    makeAutoObservable(this);
  }

  init(stateConfig: State = defaultStateConfig): void {
    const fullStateConfig = { ...emptyState, ...stateConfig };

    this.state.canidates = fullStateConfig.canidates.map((canidateConfig) => (
      new Canidate(canidateConfig)
    ));

    this.state.lists = fullStateConfig.lists.map((listConfig) => (
      new List(listConfig)
    ));
  }

  resetState(): void {
    this.init();
  }
}

export type { State };

export default StateStore;
