import { action } from 'mobx';
import Story from './Story';
import Drawer from './Drawer';
import Crawler from './Crawler';
import during from './../utils/during';
import { getTickerStories } from './../utils/fbTicker';

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
    during( () => this.crawler.isCrawling, () => this.report() );
  }
}
