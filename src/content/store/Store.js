import {observable, action} from 'mobx';

export default class Store {
  @observable search = '';
  @observable isVisible = false;
  @observable scroll = false;
  @observable stories = [];
}
