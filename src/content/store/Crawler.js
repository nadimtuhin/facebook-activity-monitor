import { observable, action } from 'mobx';
import during from './../utils/during';
import fbXhr from '../utils/fbXhr';
import { tickerMarkupCleaner } from './../utils/fbTicker';

function getTimerTime() {
  return parseInt(new Date().getTime().toString().slice(0, -3));
}

export default class Crawler {
  @observable isCrawling = false;
  @observable time = getTimerTime();

  @action start(addStories) {
    this.isCrawling = true;

    during(() => this.isCrawling, () => {
      const time = this.time - 200;
      const url = `https://www.facebook.com/ajax/ticker_entstory.php?oldest=${time}&source=fst&dpr=2`;
      fbXhr(url).then(data => {
        const stories = tickerMarkupCleaner(data);
        addStories(stories);
        this.time = time;
      });
    });
  }

  @action stop() {
    this.isCrawling = false
  }
}
