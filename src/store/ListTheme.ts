import Color from 'color';
import { makeAutoObservable } from 'mobx';

class ListTheme {
  backgroundColor?: Color;

  textColor?: Color;

  constructor(init?:Partial<ListTheme>) {
    Object.assign(this, init);

    makeAutoObservable(this);
  }
}

export default ListTheme;
