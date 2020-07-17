import React, { Component } from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom'


class Support extends Component {

  state = {
    title: 'Support'
  }

  render() {
    return (
      <>
        <Header title={this.state.title}/>
        <Link to="/Comments"><button>NEXT</button></Link>
      </>
    );
  }
}

export default Support;
