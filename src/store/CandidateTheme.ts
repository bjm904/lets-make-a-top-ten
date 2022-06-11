import Color from 'color';

class CandidateTheme {
  backgroundColor?: Color;

  textColor?: Color;

  constructor(init?:Partial<CandidateTheme>) {
    Object.assign(this, init);
  }
}

export default CandidateTheme;
