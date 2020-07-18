import React, { Component } from 'react';
import Header from '../Header/Header';
import RadioForm from '../RadioForm/RadioForm'
import {Link} from 'react-router-dom'

class Feeling extends Component {

  state = {
    title: 'Feeling'
  }

  render() {
    return (
      <>
        <Header title={this.state.title}/>
        <h1>How are you feeling today?</h1>
        <RadioForm/>
        <Link to="/Understanding"><button>NEXT</button></Link>
      </>
    );
  }
}

export default Feeling;
