import { observable, action } from 'mobx';
import { enableFbTicker, fbTickerScroll } from '../utils/fbTicker';
import during from './../utils/during';

export default class Crawler {
  @observable isCrawling = false;

  @action start() {
    enableFbTicker();
    this.isCrawling = true;

    during(() => this.isCrawling, fbTickerScroll);
  }

  @action stop() {
    this.isCrawling = false
  }
}
