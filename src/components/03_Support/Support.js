import React, { Component } from 'react';
import Header from '../Header/Header';
import RadioForm from '../RadioForm/RadioForm'
import {Link} from 'react-router-dom'


class Support extends Component {

  state = {
    title: 'Support'
  }

  render() {
    return (
      <>
        <Header title={this.state.title}/>
        <h1>How well are you being supported?</h1>
        <RadioForm/>
        <Link to="/Comments"><button>NEXT</button></Link>
      </>
    );
  }
}

export default Support;
