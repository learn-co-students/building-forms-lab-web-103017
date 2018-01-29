import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    console.log("in change", e.target.value);
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({type:'ADD_BAND', band: this.state.text})
    this.setState({text: ''})
  }

  render() {
    console.log("input", this.state);
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button type="submit">SUBMIT</button>
      </form>
      </div>
    );
  }
};

export default BandInput;
