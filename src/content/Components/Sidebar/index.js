import React, {Component} from 'react';
import Dock from 'react-dock';
import Stories from './Stories';
import Actions from './Actions';

import {observer} from 'mobx-react';
import store from './../../store';

@observer
class Sidebar extends Component {
  render() {
    return (
        <Dock position='left' size={0.2} isVisible={store.drawer.isVisible} dimMode="none">
          <div className ="sidebar">
          <Actions />
          <Stories stories={store.story.stories}/>
          </div>
        </Dock>
    );
  }
}

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
