import CanidateTheme from './CanidateTheme';

interface ThemeConfig {
  canidate: CanidateTheme,
}

interface Theme {
  canidate: CanidateTheme,
}

class Theme {
  constructor(config: ThemeConfig) {
    this.canidate = new CanidateTheme(config.canidate);
  }
}

export default Theme;
