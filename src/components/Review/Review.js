import React, { Component } from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Review extends Component {


  render() {
    return (
      <>
        <Header title='Review'/>
        <div>
          <p>Feeling: {this.props.reduxState.setFeedback.feeling}</p>
          <p>Understanding: {this.props.reduxState.setFeedback.understanding}</p>
          <p>Support: {this.props.reduxState.setFeedback.support}</p>
          <p>Comments: {this.props.reduxState.setFeedback.comments}</p>
        </div>
        <Link to="/Success"><button>SUBMIT</button></Link>
      </>
    );
  }
}

const mapStateToProps = (reduxState)=>({
  reduxState
})

export default connect(mapStateToProps)(withRouter(Review));
