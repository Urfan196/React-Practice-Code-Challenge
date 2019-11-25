import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()

    this.state = {
      sushis: [],
      nextSushiIndex: 0,
      money: []
    }

    this.allSushis = [];
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json())
    .then(sushis => {   
      this.allSushis = sushis;   
      this.setState({ sushis: this.renderSushis() })
    })
  }

  renderSushis = () => {
    let nextSushis = this.allSushis.slice(this.state.nextSushiIndex, this.state.nextSushiIndex + 4)
    this.setState({nextSushiIndex: this.state.nextSushiIndex + 4})
    return nextSushis;
  }

  handleMoreSushi = (e) => {
    let nextSushis = this.renderSushis();
    this.setState({sushis: nextSushis});
  }

  handleSushiClick = (price) => {
    const moneySum = this.state.money.reduce((a,b) => a + b, 0)
    if (moneySum + price < 100 ){
      this.setState(prevState => { 
        return {money: [...prevState.money, price]}
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} handleMoreSushi={this.handleMoreSushi} handleSushiClick={this.handleSushiClick}/>
        <Table money={this.state.money}/>
      </div>
    );
  }
}

export default App;