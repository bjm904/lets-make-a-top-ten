import { makeAutoObservable } from 'mobx';

import Candidate from './Candidate';
import defaultStateJSON from './defaultState.json';
import List from './List';

interface State {
  ready: boolean,
  candidates: Array<Candidate>,
  lists: Array<List>,
  activeListIndex: number,
}

// TODO: Write test to strictly validate defaultState.json types
const defaultStateConfig: State = defaultStateJSON;

const emptyState = (): State => ({
  ready: false,
  candidates: [],
  lists: [],
  activeListIndex: 0,
});

class StateStore {
  state: State = emptyState();

  constructor(stateConfig: State = defaultStateConfig) {
    this.init(stateConfig);

    makeAutoObservable(this);
  }

  get activeList(): List {
    return this.state.lists[this.state.activeListIndex];
  }

  init(stateConfig: State = defaultStateConfig): void {
    Object.assign(this.state, emptyState());

    const fullStateConfig = { ...emptyState(), ...stateConfig };

    this.state.candidates = fullStateConfig.candidates.map((candidateConfig) => (
      new Candidate(candidateConfig)
    ));

    this.state.lists = fullStateConfig.lists.map((listConfig) => (
      new List(listConfig)
    ));

    this.state.ready = true;
  }

  resetState(): void {
    this.init();
  }

  morphIt(): void {
    // this.state.candidates.push(new Candidate());
    // this.state.candidates[0] = { ...this.state.candidates[0], details: Date.now().toString() };
    this.state.candidates[0].details = Date.now().toString();
  }
}

export type { State };

export default StateStore;
