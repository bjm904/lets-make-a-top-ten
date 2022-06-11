import CandidateTheme from './CandidateTheme';

interface ThemeConfig {
  candidate: CandidateTheme,
}

interface Theme {
  candidate: CandidateTheme,
}

class Theme {
  constructor(config: ThemeConfig) {
    this.candidate = new CandidateTheme(config.candidate);
  }
}

export default Theme;
