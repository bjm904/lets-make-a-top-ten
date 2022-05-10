import { nanoid } from 'nanoid';
import Canidate from './Canidate';
import ListTheme from './ListTheme';

const defaultNumberOfSlots = 10;
const defaultNumberOfMentions = 10;

class List {
  id = nanoid(10);

  title = 'New List';

  // Empty implies all canidates are eligible
  eligibleCanidateIds: string[] = [];

  slots: Canidate['id'][][] = Array(defaultNumberOfSlots).fill(null).map(() => []);

  mentions: Canidate['id'][][] = Array(defaultNumberOfMentions).fill(null).map(() => []);

  themeOverrides?: ListTheme;

  constructor(init?:Partial<List>) {
    Object.assign(this, init);
  }
}

export default List;
