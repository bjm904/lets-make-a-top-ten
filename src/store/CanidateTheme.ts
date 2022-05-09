import Color from 'color';

interface CanidateThemeConfig {
  backgroundColor: string | Color,
  textColor: string | Color,
}

class CanidateTheme {
  constructor(config: CanidateThemeConfig) {
    this.backgroundColor = Color(config.backgroundColor);
    this.textColor = Color(config.textColor);
  }

  set backgroundColor(newColor: string | Color) {
    this.backgroundColor = Color(newColor);
  }

  set textColor(newColor: string | Color) {
    this.textColor = Color(newColor);
  }
}

export default CanidateTheme;
