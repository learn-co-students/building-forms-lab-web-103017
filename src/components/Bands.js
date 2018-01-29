import React, { Component } from 'react';

class Bands extends Component {
  render(){
    console.log("in bands", this.props.store.getState().bands);
    return (
      <div>
        <ul>{this.props.store.getState().bands.map((band,i) => <li key = {i}>{band}</li>)}</ul>
      </div>
    );
  }
};

export default Bands;
