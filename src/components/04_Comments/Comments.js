import React, { Component } from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom'

class Comments extends Component {

  state = {
    title: 'Comments'
  }

  render() {
    return (
      <>
        <Header title={this.state.title}/>
        <h1>Any comments you want to leave?</h1>
        <Link to="/"><button>NEXT</button></Link>
      </>
    );
  }
}

export default Comments;
