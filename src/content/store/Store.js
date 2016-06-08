import { observable, action } from 'mobx';
import map from 'lodash/map';
import Story from './Story';
import Drawer from './Drawer';
import Crawler from './Crawler';
import { enableFbTicker, fbTickerScroll } from '../utils/fbTicker';
import async from 'async';
import $ from 'jquery';
import random from 'lodash/random';

export default class Store {
  drawer = new Drawer;
  crawler = new Crawler;
  story = new Story;

  @action report() {
    let stories = document.querySelectorAll('.fbFeedTickerStory');
    stories = map(stories, story => {
      const $story = $(story);
      const $content = $story.find('.tickerStoryBlock ._42ef');
      const key = $story.attr('data-story-key');

      return {
        key,
        link: $story.find('a.tickerStoryLink').attr('href'),
        pp: $story.find('.lfloat._ohe img').attr('src'),
        content: $content.html(),
        text: $content.text()
      }
    });

    this.story.list = stories;
  }

  start() {
    this.crawler.start();
    this.autoReport();
  }

  autoReport() {
    setTimeout(() => {
      async.during(
        callback => callback(null, this.crawler.isCrawling),
        callback => {
          this.report();
          setTimeout(callback, random(4, 8) * 1000);
        },
        err => console.log(err)
      );
    }, 1000);
  }
}
