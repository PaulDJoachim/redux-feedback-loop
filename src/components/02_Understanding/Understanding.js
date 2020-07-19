import React, { Component } from 'react';
import RadioForm from '../RadioForm/RadioForm'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

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
    if (this.state.understanding === '') {
      button = <Button variant="contained" color="primary" onClick={this.noSelection}>NEXT</Button>;
    } else {
      button = <Link to="/Support"><Button variant="contained" color="primary" onClick={this.localStateDispatch}>NEXT</Button></Link>;
    }
    return (
      <>
        <div class='card'>
          <h1>How well are you understanding the content?</h1>
          <RadioForm setSelected={this.setSelected}/>
          <Link to='/'><Button variant="contained" color="primary">GO BACK</Button></Link>
          {button}
        </div>
      </>
    );
  }
}

export default connect()(Understanding);
