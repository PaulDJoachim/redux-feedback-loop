import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Feeling from '../01_Feeling/Feeling'
import Understanding from '../02_Understanding/Understanding'
import Support from '../03_Support/Support'
import Comments from '../04_Comments/Comments'
import Review from '../Review/Review'
import Success from '../Success/Success'
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Drawer from '../Drawer/Drawer';
import './App.css'


class App extends Component {
  
  // dispatch the page state to redux (gets argument from each page)
  dispatchState = (localState) => {
    this.props.dispatch({ type: "SET_FEEDBACK", payload: localState });
  }

  submitState = () => {
    axios.post('/feedback', this.props.reduxState.setFeedback)
      .then(response =>{
        console.log('response:', response);
        this.props.dispatch({type:'RESET_FEEDBACK'})
      }).catch((error)=>{
        alert('Database Error');
        console.log('POST error @/feedback', error);
      })
  }
  
  
  render() {
    return (
      <div className="App">
        <Router basename="/">
        <Header />
        <Drawer />
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
              render={() => <Review submitState={this.submitState}/>} />
            <Route 
              path="/Success" 
              render={() => <Success/>} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (reduxState)=>({
  reduxState
})

export default connect(mapStateToProps)(App);
