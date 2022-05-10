import { nanoid } from 'nanoid';
import CanidateTheme from './CanidateTheme';

class Canidate {
  id = nanoid(10);

  title = 'New Canidate';

  details = '';

  themeOverrides?: CanidateTheme;

  gif?: ArrayBuffer;

  clipReference?: {
    file: string,
    start: number;
    stop: number,
  };

  constructor(init?:Partial<Canidate>) {
    Object.assign(this, init);
  }
}

export default Canidate;
