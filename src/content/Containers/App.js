import React, { Component } from 'react';
import Dock from 'react-dock';
import { enableFbTicker, fbTickerScroll } from './../lib/fbTicker';
import async from 'async';
import $ from 'jquery';
import * as _ from 'lodash';
import Fuse from 'fuse.js';
import '!style!css!purecss/build/grids.css';
import Activity from '../lib/Activity';

const inactive = Activity(500);

class App extends Component {
  state = { isVisible: false, scroll: false, stories: [], search: '' };

  toggle() {
    enableFbTicker();
    setTimeout(() => {
      fbTickerScroll();
    }, 0);

    this.setState({ isVisible: !this.setState.isVisible });
  };

  test() {
  }

  scroll() {
    this.setState({ scroll: true });

    setTimeout(() => {
      async.during(
        callback => callback(null, this.state.scroll),
        callback => {
          fbTickerScroll();
          setTimeout(callback, _.random(4, 8) * 100);
        },
        err => console.log(err)
      );
    }, 1000);

    setTimeout(() => {
      async.during(
        callback => callback(null, this.state.scroll),
        callback => {
          this.generate.call(this);
          setTimeout(callback, _.random(4, 8) * 1000);
        },
        err => console.log(err)
      );
    }, 1000);
  }

  generate() {
    let stories = document.querySelectorAll('.tickerActivityStories .fbFeedTickerStory');
    stories = _.map(stories, story => {
      const $story = $(story);
      const $content = $story.find('.tickerStoryBlock ._42ef');

      return {
        link: $story.find('a.tickerStoryLink').attr('href'),
        pp: $story.find('.lfloat._ohe img').attr('src'),
        content: $content.html(),
        text: $content.text()
      }
    });

    console.log('generated...........');

    this.setState({ stories: stories });
  }

  renderStory(story) {
    return (
      <article className="pure-g">
        <div className="media-left pure-u-1-3">
          <p className="image is-64x64">
            <img src={story.pp} />
          </p>
        </div>
        <div className="media-content pure-u-2-3">
          <div className="content" dangerouslySetInnerHTML={{__html: story.content}}></div>
          <a href={story.link} target="_blank">Open</a>
        </div>
      </article>
    );
  }

  setSearch(e) {
    inactive().then(()=> {
      this.setState({ search: e.target.value });
    });
  }


  render() {
    console.log('re rendering ... ');

    var options = {
      keys: ['text']
    };
    var f = new Fuse(this.state.stories, options);
    var stories = f.search(this.state.search);

    return (
      <div>
        <button onClick={this.test.bind(this)}>test</button>
        <button onClick={this.toggle.bind(this)}>Open Analytics Engine</button>
        <button onClick={() => this.setState({ isVisible: !this.state.isVisible })}>close</button>

        <Dock position='left' isVisible={this.state.isVisible} dimMode="none">
          <button onClick={this.scroll.bind(this)}>Gather Data</button>
          <button onClick={this.generate.bind(this)}>Generate Report</button>

          { this.state.scroll ?
            <button onClick={() => this.setState({scroll: false})}>Stop Gathering Data</button> : null }

          <div>
            <input onChange={this.setSearch.bind(this)} type="text" />

            {stories.map(this.renderStory.bind(this))}
          </div>

          <div onClick={() => this.setState({ isVisible: !this.state.isVisible })}>X</div>
        </Dock>

      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
