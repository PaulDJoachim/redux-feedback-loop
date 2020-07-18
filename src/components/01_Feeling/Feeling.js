import React, { Component } from 'react';
import Header from '../Header/Header';
import RadioForm from '../RadioForm/RadioForm'
import {Link} from 'react-router-dom'

class Feeling extends Component {

  state = {
    title: 'Feeling',
    selected: ''
  }

  setSelected = (selection) =>{
    this.setState({
      ...this.state,
      selected: selection
    })
  }

  render() {
    let button;
    if (this.state.selected === '') {
      button = <button>NEXT</button>;
    } else {
      button = <Link to="/Understanding"><button>NEXT</button></Link>;
    }
    return (
      <>
        <Header title={this.state.title}/>
        <h1>How are you feeling today?</h1>
        <RadioForm setSelected={this.setSelected}/>
        {button}
        
      </>
    );
  }
}

export default Feeling;
