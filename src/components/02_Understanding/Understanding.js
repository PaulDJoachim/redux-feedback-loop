import React, { Component } from 'react';
import Header from '../Header/Header';
import RadioForm from '../RadioForm/RadioForm'
import {Link} from 'react-router-dom'


class Understanding extends Component {

  state = {
    title: 'Understanding'
  }

  render() {
    return (
      <>
        <Header title={this.state.title}/>
        <h1>How well are you understanding the content?</h1>
        <RadioForm/>
        <Link to="/Support"><button>NEXT</button></Link>
      </>
    );
  }
}

export default Understanding;
