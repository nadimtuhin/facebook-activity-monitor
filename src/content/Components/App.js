import React, { Component } from 'react';
import '!style!css!purecss/build/grids.css';

import Sidebar from './Sidebar/index';

import {observer} from 'mobx-react';
import store from './../store';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <button onClick={e => store.drawer.open() }>Open Analytics Engine</button>
        <button onClick={e => store.drawer.close() }>Close</button>

        <Sidebar />
      </div>
    );
  }
}

export default App;
