import { makeAutoObservable } from 'mobx';
import Color from 'color';

class ListTheme {
  backgroundColor?: Color;

  textColor?: Color;

  constructor(init?:Partial<ListTheme>) {
    Object.assign(this, init);

    makeAutoObservable(this);
  }
}

export default ListTheme;
