import React, { Component } from 'react';
import Header from '../Header/Header';
import RadioForm from '../RadioForm/RadioForm'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

class Feeling extends Component {

  state = {
    feeling: ''
  }

  // This Function sets the local state to the radio button value when selected
  setSelected = (selection) =>{
    this.setState({
      feeling: selection
    })
  }

  noSelection(){
    alert('Please Make a Selection!')
  }

  localStateDispatch = () => {
    this.props.dispatchState(this.state)
  }

  render() {
    let button;
    if (this.state.selected === '') {
      button = <button onClick={this.noSelection}>NEXT</button>;
    } else {
      button = <Link to="/Understanding"><button onClick={this.localStateDispatch}>NEXT</button></Link>;
    }
    return (
      <>
        <Header title='Feeling'/>
        <h1>How are you feeling today?</h1>
        <RadioForm setSelected={this.setSelected}/>
        {button}
      </>
    );
  }
}

export default connect()(Feeling);
