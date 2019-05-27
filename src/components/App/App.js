import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

import ImageCarousel from '../ImageCarousel/ImageCarousel';

class App extends Component {

  componentDidMount() {
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>MOOD RING</h1>

        <ImageCarousel />
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
