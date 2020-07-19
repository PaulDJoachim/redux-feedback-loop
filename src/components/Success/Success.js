import React, { Component } from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

class Success extends Component {

  render() {
    return (
      <>
        <Header title='Success!'/>
        <h1>SUCCESS!</h1>
        <Link to="/">
          <button>RESTART</button>
        </Link>
      </>
    );
  }
}

export default connect()(Success);
