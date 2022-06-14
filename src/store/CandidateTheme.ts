import Color from 'color';
import { makeAutoObservable } from 'mobx';

class CandidateTheme {
  backgroundColor?: Color;

  textColor?: Color;

  constructor(init?:Partial<CandidateTheme>) {
    Object.assign(this, init);

    makeAutoObservable(this);
  }
}

export default CandidateTheme;
