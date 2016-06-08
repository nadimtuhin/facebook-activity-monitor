import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from './../../../store';
import Story from './Story';

@observer
class Stories extends Component {
  render() {
    const { stories } = this.props;

    return (
      <div>
        <input onChange={e => store.story.search(e.target.value)} type="text" />

        <div>
          {stories.map(story => <Story story={story} />)}
        </div>
      </div>
    );
  }
}

Stories.propTypes = {};
Stories.defaultProps = {};

export default Stories;
