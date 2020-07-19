import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <>
        <ul>
          <Link to='/Feelings'><li>Feelings</li></Link>
          <Link to='/Understanding'><li>Understanding</li></Link>
          <Link to='/Support'><li>Support</li></Link>
          <Link to='/Comments'><li>Comments</li></Link>
          <Link to='/Review'><li>Review</li></Link>
        </ul>
      </>
    );
  }
}


const mapStateToProps = (reduxState)=>({
  reduxState
})

export default Navbar;
