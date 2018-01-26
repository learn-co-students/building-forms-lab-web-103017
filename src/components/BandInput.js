import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    });
    this.setState({
      text: ''
    })
    // console.log('In the handleSubmit')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band Name </label>
          <input
            type='text'
            value={this.state.band}
            onChange={this.handleChange}
            />
          <br></br>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default BandInput;
