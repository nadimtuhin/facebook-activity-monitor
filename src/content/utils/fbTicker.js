import $ from 'jquery';
import map from 'lodash/map';
import { select, scrollToBottom } from './dom';

export function enableFbTicker () {
  const btn = '#pagelet_reminders .tickerLineToggle';
  select(btn).click();
}

export function fbTickerScroll () {
  const container = select('#pagelet_rhc_ticker .fbFeedTicker .uiScrollableArea .scrollable');
  scrollToBottom(container);
}

/**
 * remove jquery dependency
 * @returns {Array}
 */
export function getTickerStories (doc = document) {
  const storyNodes = doc.querySelectorAll('.fbFeedTickerStory');

  return map(storyNodes, story => {
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
}
