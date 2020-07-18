import React, { Component } from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

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
        <Header title='Comments'/>
        <h1>Any comments you want to leave?</h1>
        <textarea onChange={this.setComment}/>
        <Link to="/Review">
          <button onClick={this.localStateDispatch}>NEXT</button>
        </Link>
      </>
    );
  }
}

export default connect()(Comments);
