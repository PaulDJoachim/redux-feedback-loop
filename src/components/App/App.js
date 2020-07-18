import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Feeling from '../01_Feeling/Feeling'
import Understanding from '../02_Understanding/Understanding'
import Support from '../03_Support/Support'
import Comments from '../04_Comments/Comments'
import Review from '../Review/Review'
import {connect} from 'react-redux';


class App extends Component {
  
  dispatchState = (localState) => {
    this.props.dispatch({ type: "SET_FEEDBACK", payload: localState });
  }

  render() {
    return (
      <div className="App">
        <Router basename="/">
            <Route 
              exact path="/" 
              render={() => <Feeling dispatchState={this.dispatchState} />} />
            <Route 
              path="/Understanding" 
              render={() => <Understanding dispatchState={this.dispatchState} />} />
            <Route 
              path="/Support" 
              render={() => <Support dispatchState={this.dispatchState} />} />
            <Route 
              path="/Comments" 
              render={() => <Comments dispatchState={this.dispatchState} />} />
            <Route 
              path="/Review" 
              render={() => <Review dispatchState={this.dispatchState} />} />
        </Router>

      </div>
    );
  }
}

export default connect()(App);
