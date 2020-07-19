import React, { Component } from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

class Comments extends Component {

  state = {
    comments: ''
  }

  setComment = (e) =>{
    this.setState({
      comments: e.target.value
    })
  }

  localStateDispatch = () => {
    this.props.dispatchState(this.state)
  }

  render() {
    return (
      <>
        <div class='card'>
        <h1>Any comments you want to leave?</h1>
        <textarea onChange={this.setComment}/>
          <div>
          <Link to='/Support'><Button variant="contained" color="primary">GO BACK</Button></Link>
          <Link to="/Review">
            <Button variant="contained" color="primary" onClick={this.localStateDispatch}>NEXT</Button>
          </Link>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(Comments);
