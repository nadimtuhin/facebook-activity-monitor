import Story from './Story';
import Drawer from './Drawer';
import Crawler from './Crawler';

export default class Store {
  drawer = new Drawer;
  crawler = new Crawler;
  story = new Story;

  start() {
    this.crawler.start(stories => this.story.addStories(stories));
  }
}
