import React, { Component } from 'react';
import Header from '../Header/Header';
import RadioForm from '../RadioForm/RadioForm'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

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
      button = <Button variant="contained" color="primary" onClick={this.noSelection}>NEXT</Button>;
    } else {
      button = <Link to="/Comments"><Button variant="contained" color="primary" onClick={this.localStateDispatch}>NEXT</Button></Link>;
    }
    return (
      <>
        <div class='card'>
          <h1>How well are you being supported?</h1>
          <RadioForm setSelected={this.setSelected}/>
          <Link to='/Understanding'><Button variant="contained" color="primary">GO BACK</Button></Link>
          {button}
        </div>
      </>
    );
  }
}

export default connect()(Support);
