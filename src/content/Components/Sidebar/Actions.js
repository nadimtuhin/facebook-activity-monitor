import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from './../../store';

@observer
class Actions extends Component {
  render() {
    return (
      <div>
        <button onClick={e => store.start() }>Gather Data</button>
        <button onClick={e => store.report() }>Generate Report</button>

        { store.crawler.isCrawling && <button onClick={e => store.crawler.stop() }>
          Stop Gathering Data
        </button> }
      </div>
    );
  }
}

Actions.propTypes = {};
Actions.defaultProps = {};

export default Actions;
