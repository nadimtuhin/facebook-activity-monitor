import { observable, action } from 'mobx';

export default class Drawer {
  @observable isVisible = false;

  @action open() {
    this.isVisible = true;
  }

  @action close() {
    this.isVisible = false
  }
}
