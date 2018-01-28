import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (ev) => {
    this.setState({
      text: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })

    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default BandInput;
