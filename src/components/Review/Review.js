import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Review extends Component {


  render() {
    return (
      <>
        {/* <Header title='Review'/> */}
        <div class='card'>
          <p>Feeling: {this.props.reduxState.setFeedback.feeling}</p>
          <p>Understanding: {this.props.reduxState.setFeedback.understanding}</p>
          <p>Support: {this.props.reduxState.setFeedback.support}</p>
          <p>Comments: {this.props.reduxState.setFeedback.comments}</p>
        <Link to='/Comments'><Button variant="contained" color="primary">GO BACK</Button></Link>
        <Link to='/Success'><Button variant="contained" color="primary" onClick={this.props.submitState}>SUBMIT</Button></Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState)=>({
  reduxState
})

export default connect(mapStateToProps)(withRouter(Review));
