import React, { Component } from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom'

class Understanding extends Component {

  state = {
    title: 'Understanding'
  }

  render() {
    return (
      <>
        <Header title={this.state.title}/>
        <Link to="/Support"><button>NEXT</button></Link>
      </>
    );
  }
}

export default Understanding;
