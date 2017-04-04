import React from 'react';

import Navigation from './Navigation';
import Beer       from './Beer';
import BeersTable from './BeersTable';
import BeerForm   from './BeerForm';
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      currentBeer: undefined,
      showNewForm: false
    }
  }

  handleChangeLocation = (beerID) => {
    if (beerID === 'new') {
      this.setState({showNewForm: true})
    } else {
      var currentBeer = this.state.beers.find( beer => { return beer.id === beerID})
      this.setState({currentBeer})
    }
  }

  handleInsertBeer = (beer) => {
    fetch('http://localhost:5000/beers', {
      body: JSON.stringify({beer: beer}),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then( resp => { return resp.json() })
      .then( json => {
        fetch('http://localhost:5000/beers')
          .then( resp => { return resp.json() })
          .then( json => {
            this.setState({showNewForm: false, beers: json.beers})
          })
      })
      .catch( () => { console.error('Failed Request')})
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
        <div className="beer-app__main">
          { this.state.showNewForm ?
            <BeerForm insertBeer={this.handleInsertBeer}/> :
            this.state.currentBeer ? <Beer currentBeer={this.state.currentBeer}/> : <BeersTable beers={this.state.beers}/>
          }
        </div>
      </div>
    )
  }
}
export default App;
