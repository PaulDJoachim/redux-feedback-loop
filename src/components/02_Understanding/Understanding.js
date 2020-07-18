import React, { Component } from 'react';
import Header from '../Header/Header';
import RadioForm from '../RadioForm/RadioForm'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

class Understanding extends Component {

  state = {
    understanding: ''
  }

  // This Function sets the local state to the radio button value when selected
  setSelected = (selection) =>{
    this.setState({
      understanding: selection
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
      button = <Link to="/Support"><button onClick={this.localStateDispatch}>NEXT</button></Link>;
    }
    return (
      <>
        <Header title='Understanding'/>
        <h1>How well are you understanding the content?</h1>
        <RadioForm setSelected={this.setSelected}/>
        {button}
      </>
    );
  }
}

export default connect()(Understanding);
