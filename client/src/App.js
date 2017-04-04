import React from 'react';

import Navigation from './Navigation';
import Beer       from './Beer';

import './App.css'

var beers = [
  {id: 1, name: 'Beer 1'}
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      currentBeer: undefined
    }
  }

  handleChangeLocation = (beerID) => {
    var currentBeer = this.state.beers.find( beer => { return beer.id === beerID})
    this.setState({currentBeer})
  }

  componentDidMount() {
    fetch('http://localhost:5000/beers')
      .then( (resp) => { return resp.json() })
      .then( (json) => {
        var beers = json.beers;
        this.setState({beers})
      })
      .catch( () => {
        console.error('AJAX FAILED')
      })
  }

  render() {
    return (
      <div className="beer-app">
        <Navigation
            className="beer-app__navigation"
            beers={this.state.beers}
            onChangeLocation={this.handleChangeLocation}/>
        { this.state.currentBeer ? <Beer className="beer-app__main" currentBeer={this.state.currentBeer}/> : <div className="beer-app__main">No Beer</div> }
      </div>
    )
  }
}
export default App;
