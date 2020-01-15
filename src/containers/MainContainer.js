import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import Stock from '../components/Stock'

class MainContainer extends Component {

  state = {
    stocks: [],
    boughtStocks: [],
    filteredStocks: [],
    filteredBoughtStocks: []

  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(r => r.json())
      .then(stockArray => this.setState({
        stocks: stockArray,
        filteredStocks: stockArray

      }))
  }


  handleStockBuy = (name, price, type) => {
      this.setState({
        boughtStocks: [...this.state.boughtStocks,  {stockName: name, stockPrice: price, stockType: type}],
        filteredBoughtStocks: [...this.state.boughtStocks, { stockName: name, stockPrice: price, stockType: type }]
      })
    }

    handleStockDelete = (index) => {
      this.state.filteredBoughtStocks.splice(index, 1)
      this.setState({
        filteredBoughtStocks: [...this.state.filteredBoughtStocks]
      })

      // this.setState({
      //   boughtStock: [...this.state.boughtStock, { stockName: name, stockPrice: price }]
      // })
    }

    handleSort = (event) => {
      let allStocks = this.state.stocks
      let myStocks = this.state.boughtStocks

      let sorter = event.target.value

      if (sorter === "Alphabetically")
      {
        allStocks.sort((a,b) => a.name.localeCompare(b.name))
        myStocks.sort((a, b) => a.stockName.localeCompare(b.stockName))

        console.log(myStocks)
        this.setState({
          ...this.state,
          filteredStocks: allStocks,
          filteredBoughtStocks: myStocks
        })
      }
      else if (sorter === "Price")
      {
        allStocks.sort((a, b) => a.price - b.price)
        myStocks.sort((a, b) => a.stockPrice - b.stockPrice)

        this.setState({
          ...this.state,
          filteredStocks: allStocks,
          filteredBoughtStocks: myStocks

        })
      } 
    }

    handleFilter = (event) => {
      

      let filteredStocksArray, filteredPurchasedArray
      let filter = event.target.value
      
      if (filter === "Tech")
      {
        filteredStocksArray = this.state.stocks.filter((stock) => stock.type === filter )
        filteredPurchasedArray = this.state.boughtStocks.filter((stock) => stock.stockType === filter )
      }
      else if (filter === "Sportswear")
      {
        filteredStocksArray = this.state.stocks.filter((stock) => stock.type === filter)
        filteredPurchasedArray = this.state.boughtStocks.filter((stock) => stock.stockType === filter)

      }
      else if (filter === "Finance") 
      {
        filteredStocksArray = this.state.stocks.filter((stock) => stock.type === filter)
        filteredPurchasedArray = this.state.boughtStocks.filter((stock) => stock.stockType === filter)
      }
      else if (filter === "All")
        {
          console.log(this.state.stocks)
        filteredStocksArray = this.state.stocks
        filteredPurchasedArray = this.state.boughtStocks 
        }

      console.log(filteredStocksArray)

      this.setState({
        ...this.state,
        filteredBoughtStocks: filteredPurchasedArray,
        filteredStocks: filteredStocksArray
      })
      
    }

  createStockDiv = () => {
    //console.log("making stock")
    
    //console.log(stockArray)
    return this.state.filteredStocks.map((stocks, inx) => {
      return <div onClick={() => { this.handleStockBuy(stocks.name, stocks.price, stocks.type) }}><Stock stockName={stocks.name} stockPrice={stocks.price} /></div>
    })

  }


  render() {
    return (
      <div>
        <SearchBar handleSort={this.handleSort} handleFilter={this.handleFilter}/>

          <div className="row">
            <div className="col-8">

            <StockContainer handleStockBuy={this.handleStockBuy} createStockDiv = {this.createStockDiv}/>

            </div>
            <div className="col-4">

            <PortfolioContainer boughtStocks={this.state.filteredBoughtStocks} handleStockDelete={this.handleStockDelete} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
