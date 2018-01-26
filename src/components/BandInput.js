import React, { Component } from 'react';

class BandInput extends Component {

  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
    this.setState({
      text: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter band name:</label>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit"Submit Band />
        </form>
      </div>
    );
  }
};

export default BandInput;
