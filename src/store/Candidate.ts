import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';
import CandidateTheme from './CandidateTheme';

class Candidate {
  id = nanoid(10);

  title = 'New Candidate';

  details = '';

  themeOverrides?: CandidateTheme;

  gif?: ArrayBuffer;

  clipReference?: {
    file: string,
    start: number;
    stop: number,
  };

  constructor(init?:Partial<Candidate>) {
    Object.assign(this, init);

    makeAutoObservable(this);
  }
}

export default Candidate;
