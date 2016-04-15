export function select (selector) {
  return document.querySelector(selector);
}

export function scrollToBottom(el){
  el.scrollTop = el.scrollHeight - el.clientHeight;
}
