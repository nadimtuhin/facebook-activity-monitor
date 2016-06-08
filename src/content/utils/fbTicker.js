import { select, scrollToBottom } from './dom';

export function enableFbTicker () {
  const btn = '#pagelet_reminders .tickerLineToggle';
  select(btn).click();
}

export function fbTickerScroll () {
  const container = select('#pagelet_rhc_ticker .fbFeedTicker .uiScrollableArea .scrollable');
  scrollToBottom(container);
}
