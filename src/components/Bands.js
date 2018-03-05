import React, { Component } from "react"

class Bands extends Component {
  bandList = () =>
    this.props.store.getState().bands.map((band, index) => {
      return <li key={index}>{band}</li>
    })
  render() {
    return <ul>{this.bandList}</ul>
  }
}

export default Bands
