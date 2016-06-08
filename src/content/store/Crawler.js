import { observable, action } from 'mobx';
import async from 'async';
import { enableFbTicker, fbTickerScroll } from '../utils/fbTicker';
import random from 'lodash/random';

export default class Crawler {
  @observable isCrawling = false;

  @action start() {
    this.isCrawling = true;

    setTimeout(() => {
      async.during(
        callback => callback(null, this.isCrawling),
        callback => {
          fbTickerScroll();
          setTimeout(callback, random(4, 8) * 100);
        },
        err => console.log(err)
      );
    }, 1000);
  }

  @action stop() {
    this.isCrawling = false
  }
}
