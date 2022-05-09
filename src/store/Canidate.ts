import CanidateTheme from './CanidateTheme';

interface CanidateConfig {
  title: string,
  details?: string,
  hidden?: boolean,
  themeOverrides?: CanidateTheme,
  gif?: ArrayBuffer,
  clipReference?: {
    file: string,
    start: number,
    stop: number,
  }
}

class Canidate {
  title: string;

  details = '';

  hidden = false;

  themeOverrides?: CanidateTheme;

  gif?: ArrayBuffer;

  clipReference?: {
    file: string,
    start: number;
    stop: number,
  };

  constructor(config: CanidateConfig) {
    this.title = config.title;
    this.details = config.details || '';
    this.hidden = Boolean(config.hidden);
    this.themeOverrides = config.themeOverrides;
    this.gif = config.gif;
    this.clipReference = config.clipReference;
  }
}

export default Canidate;
