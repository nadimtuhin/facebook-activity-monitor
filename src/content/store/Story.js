import { observable, action, computed } from 'mobx';
import Fuse from 'fuse.js';

export default  class Story {
  @observable keyword = '';
  @observable list = [];

  @action search(keyword) {
    this.keyword = keyword;
  }

  @computed get stories() {
    return this.searchStories(this.list, this.keyword) || [];
  }

  searchStories(stories, keyword) {
    const options = {
      keys: ['text']
    };

    const google = new Fuse(stories, options);
    return google.search(keyword);
  }
}
