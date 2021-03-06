import React, { Component } from 'react';

class RadioForm extends Component {


  selection = (event) => {
    console.log(event.target.value)
    this.props.setSelected(event.target.value)
  }

  render() {
    return (
      <>
        <form onChange={this.selection}>
          <input type="radio" id="1" name="radio" value="1"/>
          <label htmlFor="1">1</label>
          <input type="radio" id="2" name="radio" value="2"/>
          <label htmlFor="2">2</label>
          <input type="radio" id="3" name="radio" value="3"/>
          <label htmlFor="3">3</label>
          <input type="radio" id="4" name="radio" value="4"/>
          <label htmlFor="4">4</label>
          <input type="radio" id="5" name="radio" value="5"/>
          <label htmlFor="5">5</label>
        </form> 
      </>
    );
  }
}

export default RadioForm;
