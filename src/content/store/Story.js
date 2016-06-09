import { observable, action } from 'mobx';
import Fuse from 'fuse.js';
import Activity from './../utils/Activity';
import noop from 'lodash/noop';
import uniqBy from 'lodash/uniqBy';
const inactive = Activity(500);

export default  class Story {
  @observable keyword = '';
  @observable allStories = [];
  @observable stories = [];

  @action search(keyword) {
    this.keyword = keyword;

    inactive().then(() => {
      this.stories = this.searchStories(this.allStories, this.keyword);
    }, noop);
  }

  @action addStories(stories){
    this.allStories = uniqBy(this.allStories.concat(stories), story => story.key);

    this.stories = this.searchStories(this.allStories, this.keyword);
  }

  searchStories(stories, keyword) {
    /**
     * threshold is the correctness of the search
     * @type {{threshold: number, keys: string[]}}
     */
    const options = {
      threshold: 0.2,
      keys: ['text']
    };

    const google = new Fuse(stories, options);
    return google.search(keyword) || [];
  }
}
