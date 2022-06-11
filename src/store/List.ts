import { nanoid } from 'nanoid';
import Candidate from './Candidate';
import ListTheme from './ListTheme';

const defaultNumberOfSlots = 10;
const defaultNumberOfMentions = 10;

class List {
  id = nanoid(10);

  title = 'New List';

  // Empty implies all candidates are eligible
  eligibleCandidateIds: string[] = [];

  slots: Candidate['id'][][] = Array(defaultNumberOfSlots).fill(null).map(() => []);

  mentions: Candidate['id'][][] = Array(defaultNumberOfMentions).fill(null).map(() => []);

  themeOverrides?: ListTheme;

  constructor(init?:Partial<List>) {
    Object.assign(this, init);
  }
}

export default List;
