import React, { Component } from 'react';
import RadioForm from '../RadioForm/RadioForm'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

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
    if (this.state.feeling === '') {
      button = <Button variant="contained" color="primary" onClick={this.noSelection}>NEXT</Button>;
    } else {
      button = <Link to="/Understanding"><Button variant="contained" color="primary" onClick={this.localStateDispatch}>NEXT</Button></Link>;
    }
    return (
      <>
        <div class='card'>
          <h1>How are you feeling today?</h1>
          <RadioForm setSelected={this.setSelected}/>
          {button}
        </div>
      </>
    );
  }
}

export default connect()(Feeling);
