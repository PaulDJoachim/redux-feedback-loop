import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <h2>{this.props.title}</h2>
          {/* <h2>{JSON.stringify(this.props.reduxState, this.props)}</h2> */}
          {/* <h2>{JSON.stringify(this.props.history)}</h2> */}
        </header>
        <br/>
      </>
    );
  }
}


const mapStateToProps = (reduxState)=>({
  reduxState
})

export default connect(mapStateToProps)(withRouter(Header));
