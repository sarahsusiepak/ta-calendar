import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Day from './Day';

var App = React.createClass({
  render () {
    return (
      <div>
        <Day title='Today'/>
      </div>
    );
  }
})

export default App;