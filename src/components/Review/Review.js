import React, { Component } from 'react';
import Header from '../Header/Header';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

class Review extends Component {


  render() {
    return (
      <>
        {/* <Header title='Review'/> */}
        <div>
          <p>Feeling: {this.props.reduxState.setFeedback.feeling}</p>
          <p>Understanding: {this.props.reduxState.setFeedback.understanding}</p>
          <p>Support: {this.props.reduxState.setFeedback.support}</p>
          <p>Comments: {this.props.reduxState.setFeedback.comments}</p>
        </div>
        <Link to='/Comments'><button>GO BACK</button></Link>
        <Link to='/Success'><button onClick={this.props.submitState}>SUBMIT</button></Link>
      </>
    );
  }
}

const mapStateToProps = (reduxState)=>({
  reduxState
})

export default connect(mapStateToProps)(withRouter(Review));
