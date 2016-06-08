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
      <Dock position='left' isVisible={store.drawer.isVisible} dimMode="none">
        <Actions />
        <Stories stories={store.story.stories}/>
      </Dock>
    );
  }
}

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
