import Color from 'color';

class CanidateTheme {
  backgroundColor?: Color;

  textColor?: Color;

  constructor(init?:Partial<CanidateTheme>) {
    Object.assign(this, init);
  }
}

export default CanidateTheme;
