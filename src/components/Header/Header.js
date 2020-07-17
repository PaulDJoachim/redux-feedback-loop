import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <h2>{this.props.title}</h2>
        </header>
        <br/>
      </>
    );
  }
}

export default Header;
