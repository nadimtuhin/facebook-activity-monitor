import { observable, action, computed } from 'mobx';
import Fuse from 'fuse.js';
import Activity from './../utils/Activity';

const inactive = Activity(500);

export default  class Story {
  @observable keyword = '';
  @observable list = [];
  @observable stories = [];

  @action search(keyword) {
    this.keyword = keyword;

    inactive().then(() => {
      this.stories = this.searchStories(this.list, this.keyword);
    });
  }

  @action setStories(stories){
    this.list = stories;
    this.stories = this.searchStories(stories, this.keyword);
  }

  searchStories(stories, keyword) {
    const options = {
      threshold: 0.2,
      keys: ['text']
    };

    const google = new Fuse(stories, options);
    return google.search(keyword) || [];
  }
}
