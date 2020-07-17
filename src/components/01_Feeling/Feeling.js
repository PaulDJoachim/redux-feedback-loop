import React, { Component } from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom'

class Feeling extends Component {

  state = {
    title: 'Feeling'
  }

  render() {
    return (
      <>
        <Header title={this.state.title}/>
        <Link to="/Understanding"><button>NEXT</button></Link>
      </>
    );
  }
}

export default Feeling;
