// @flow

import React, { Component } from 'react';
import './Home.css';

import SampleContainer from '../../containers/SampleContainer'

class Home extends Component {
  static displayName: string = 'Home';

  render(): Component {
    return (
      <div className="Home container">
        Home

        <SampleContainer/>
      </div>
    );
  }
}

export default Home;
