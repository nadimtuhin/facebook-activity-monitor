import { observable, action } from 'mobx';
import during from './../utils/during';
import fbXhr from '../utils/fbXhr';
import { getTickerStories } from './../utils/fbTicker';


function tickerMarkupCleaner(data) {
  let stories = data.jsmods.markup[0][1].__html;
  const parser = new DOMParser;
  const doc = parser.parseFromString(stories, 'text/html');
  [].forEach.call(doc.querySelectorAll('.tickerMorePager'), n=>n.remove());
  [].forEach.call(doc.querySelectorAll('.tickerSpinner'), n=>n.remove());
  stories = getTickerStories(doc);
  return stories;
}

export default class Crawler {
  @observable isCrawling = false;
  @observable time = parseInt(new Date().getTime().toString().slice(0, -3));

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
