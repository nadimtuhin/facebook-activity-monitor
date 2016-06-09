import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from './../../store';
import Spinner from 'react-spinkit';

@observer
class Actions extends Component {
  render() {
    return (
      <div>
        { !store.crawler.isCrawling ?
          <button onClick={e => store.start() }>
            Gather Data
          </button> :
          <button onClick={e => store.crawler.stop() }>
            Stop Gathering Data
          </button> }

        <button onClick={e => store.drawer.close() }>Hide</button>

        { store.crawler.isCrawling && <Spinner spinnerName='three-bounce' /> }
      </div>
    );
  }
}

Actions.propTypes = {};
Actions.defaultProps = {};

export default Actions;
