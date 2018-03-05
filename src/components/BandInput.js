import React, { Component } from "react"

class BandInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
  }

  handleInput = event => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.store.dispatch({ type: "ADD_BAND", bands: this.state.input })
    this.setState({ input: "" })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
