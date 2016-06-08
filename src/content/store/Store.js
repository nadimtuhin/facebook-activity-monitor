import { action } from 'mobx';
import Story from './Story';
import Drawer from './Drawer';
import Crawler from './Crawler';
import async from 'async';
import random from 'lodash/random';
import { getTickerStories } from './../utils/fbTicker';

function during(condition, task) {
  setTimeout(() => {
    async.during(
      callback => callback(null, condition()),
      callback => {
        task();
        setTimeout(callback, random(4, 8) * 1000);
      },
      err => console.log(err)
    );
  }, 1000);
}

export default class Store {
  drawer = new Drawer;
  crawler = new Crawler;
  story = new Story;

  @action report() {
    const stories = getTickerStories();
    this.story.setStories(stories)
  }

  start() {
    this.crawler.start();
    this.autoReport();
  }

  autoReport() {
    during( () => this.crawler.isCrawling, () => this.report());
  }
}
