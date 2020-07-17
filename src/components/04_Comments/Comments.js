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
        <button>NEXT</button>
      </>
    );
  }
}

export default Comments;
