import { select, scrollToBottom } from './dom';

export function enableFbTicker () {
  const btn = '#pagelet_reminders .tickerLineToggle';
  console.log(select(btn));
  select(btn).click();
}

export function fbTickerScroll () {
  const container = select('#pagelet_rhc_ticker .fbFeedTicker .uiScrollableArea .scrollable');
  scrollToBottom(container);
}
