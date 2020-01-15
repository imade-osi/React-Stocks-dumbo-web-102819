import React from 'react'




const Stock = (props) => (
  <div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stockName
          }</h5>
        <p className="card-text">{
            props.stockPrice
          }</p>
      </div>
    </div>
  </div>
);

export default Stock

//()=> {props.handleStockBuy(props.stockName, props.stockPrice)}