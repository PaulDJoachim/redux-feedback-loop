import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

class Success extends Component {

  render() {
    return (
      <>
        {/* <Header title='Success!'/> */}
        <h1>SUCCESS!</h1>
        <p>Your Feedback has been saved.</p>
        <Link to="/">
          <Button variant="contained" color="primary">RESTART</Button>
        </Link>
      </>
    );
  }
}

export default connect()(Success);
