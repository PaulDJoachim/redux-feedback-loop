import React, { Component } from 'react';

class RadioForm extends Component {

  state = {
    title: 'Feeling'
  }

  render() {
    return (
      <>
        <form>
          <input type="radio" id="1" name="radio" value="1"/>
          <label for="1">1</label>
          <input type="radio" id="2" name="radio" value="2"/>
          <label for="2">2</label>
          <input type="radio" id="3" name="radio" value="3"/>
          <label for="3">3</label>
          <input type="radio" id="4" name="radio" value="4"/>
          <label for="4">4</label>
          <input type="radio" id="5" name="radio" value="5"/>
          <label for="5">5</label>
        </form> 
      </>
    );
  }
}

export default RadioForm;
