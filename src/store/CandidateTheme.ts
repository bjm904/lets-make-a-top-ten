import { makeAutoObservable } from 'mobx';
import Color from 'color';

class CandidateTheme {
  backgroundColor?: Color;

  textColor?: Color;

  constructor(init?:Partial<CandidateTheme>) {
    Object.assign(this, init);

    makeAutoObservable(this);
  }
}

export default CandidateTheme;
