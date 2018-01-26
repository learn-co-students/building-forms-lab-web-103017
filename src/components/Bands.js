import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const bands = this.props.store.getState().bands.map(band => {
      return <ul><li>{band}</li></ul>
    })
    return (
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;
