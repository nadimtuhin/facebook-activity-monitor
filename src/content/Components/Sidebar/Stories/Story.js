import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Story extends Component {
  render() {
    const { story } = this.props;

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
}

Story.propTypes = {};
Story.defaultProps = {};

export default Story;
