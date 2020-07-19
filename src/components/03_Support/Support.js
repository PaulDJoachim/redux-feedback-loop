import React, { Component } from 'react';
import Header from '../Header/Header';
import RadioForm from '../RadioForm/RadioForm'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

class Support extends Component {

  state = {
    support: ''
  }

  setSelected = (selection) =>{
    this.setState({
      support: selection
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
    if (this.state.support === '') {
      button = <button onClick={this.noSelection}>NEXT</button>;
    } else {
      button = <Link to="/Comments"><button onClick={this.localStateDispatch}>NEXT</button></Link>;
    }
    return (
      <>
        {/* <Header title='Support'/> */}
        <h1>How well are you being supported?</h1>
        <RadioForm setSelected={this.setSelected}/>
        <Link to='/Understanding'><button>GO BACK</button></Link>
        {button}
      </>
    );
  }
}

export default connect()(Support);
