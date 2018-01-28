import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super()

    this.state = {
      text: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default BandInput;
