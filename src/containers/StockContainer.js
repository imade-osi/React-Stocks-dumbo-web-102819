import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  
  render() {
    //console.log(this.state)
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.createStockDiv()
        }
      </div>
    );
  }

}

export default StockContainer;
