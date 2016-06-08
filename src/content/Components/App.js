import React, { Component } from 'react';
import 'purecss/build/grids.css';
import 'purecss/build/forms.css';
import "./style.css";

import Sidebar from './Sidebar/index';

import { observer } from 'mobx-react';
import store from './../store';

@observer
class App extends Component {
  render() {
    return (
      <div>
        {!store.drawer.isVisible ?
          <button onClick={e => store.drawer.open() }>Open Analytics Engine</button> :
          <button onClick={e => store.drawer.close() }>Hide Analytics Engine</button>
        }

        <Sidebar />
      </div>
    );
  }
}

export default App;
