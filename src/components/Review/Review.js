import React, { Component } from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom'

class Review extends Component {

  state = {
    title: 'Review'
  }

  render() {
    return (
      <>
        <Header title={this.state.title}/>
        <h1>Any Review you want to leave?</h1>
        <Link to="/"><button>NEXT</button></Link>
      </>
    );
  }
}

export default Review;
