import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  createPortfolioDiv = () => {
    //console.log("object")
    return this.props.boughtStocks.map((data, idx) => { 
      return <div onClick={()=>{this.props.handleStockDelete(idx)}}><Stock stockName={data.stockName} stockPrice={data.stockPrice} stockIndex={idx}  /></div>
      
      //console.log(<Stock/>)
   })
    
   
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.createPortfolioDiv()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
