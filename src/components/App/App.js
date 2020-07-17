import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import {HashRouter as Router,Switch,Route,Link} from "react-router-dom";
import Feeling from '../01_Feeling/Feeling'
import Understanding from '../02_Understanding/Understanding'
import Support from '../03_Support/Support'
import Comments from '../04_Comments/Comments'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Route exact path="/" component={Feeling} />
            <Route path="/Understanding" component={Understanding} />
            <Route path="/Support" component={Support} />
            <Route path="/Comments" component={Comments} />
        </Router>

      </div>
    );
  }
}

export default App;
