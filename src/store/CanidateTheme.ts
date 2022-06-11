import Color from 'color';

class CanidateTheme {
  backgroundColor?: string;

  textColor?: string;

  constructor(init?:Partial<CanidateTheme>) {
    Object.assign(this, init);
  }

  set backgroundColor(newColor: string | Color) {
    this.backgroundColor = Color(newColor);
  }

  set textColor(newColor: string | Color) {
    this.textColor = Color(newColor);
  }
}

export default CanidateTheme;