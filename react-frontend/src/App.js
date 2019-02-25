import React, { Component } from 'react';
import axios from 'axios';
import {Router, Route, browserHistory} from 'react-router';
import './App.css';

import Root from './components/Root.js';
import Search from './components/Search.js'


class App extends Component {

  render() {
      return (
        <div className="app">
          <Router history={browserHistory}>
            <Route path={"/"} component={Root}/>
            <Route path={"search"} component={Search}/>
          </Router>
        </div>
      );
    }
  }

export default App;
