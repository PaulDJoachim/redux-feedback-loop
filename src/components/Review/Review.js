import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';


class Review extends Component {

  noSelection(){
    alert('You are missing information, please go back and answer each question.')
  }

  
  render() {
    let button;
    console.log(this.props.reduxState.setFeedback.feeling)
    if (this.props.reduxState.setFeedback.feeling === undefined ||
        this.props.reduxState.setFeedback.support === undefined ||
        this.props.reduxState.setFeedback.understanding === undefined ) {
      button = <Button variant="contained" color="primary" onClick={this.noSelection}>NEXT</Button>;
    } else {
      button = <Link to='/Success'><Button variant="contained" color="primary" onClick={this.props.submitState}>SUBMIT</Button></Link>;
    }
    return (
      <>
        {/* <Header title='Review'/> */}
        <div className='card'>
          <p>Feeling: {this.props.reduxState.setFeedback.feeling}</p>
          <p>Understanding: {this.props.reduxState.setFeedback.understanding}</p>
          <p>Support: {this.props.reduxState.setFeedback.support}</p>
          <p>Comments: {this.props.reduxState.setFeedback.comments}</p>
        <Link to='/Comments'><Button variant="contained" color="primary">GO BACK</Button></Link>
        {button}
        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState)=>({
  reduxState
})

export default connect(mapStateToProps)(withRouter(Review));
