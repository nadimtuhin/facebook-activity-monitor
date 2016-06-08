import React from 'react';
import {render} from 'react-dom';
import App from './Components/App';

const mount = document.getElementById('feed_optimistic_video');

if(mount){
  render(<App />, mount);
} else {
  console.log('analytics mount node not found');
}
