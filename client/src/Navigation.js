import React, { PropTypes } from 'react'

import './Navigation.css'
/* class Navigation extends React.Component {
 *   render() {
 *     return (
 *       <div></div>
 *     )
 *   }
 * }*/

const Navigation = (props) => (
  <nav className={`${props.className} navigation`}>
    <ul>
      { props.beers.map( beer => <li key={beer.id}>
        <a
            href={`/beers/${beer.id}`}
            onClick={ (e) => { e.preventDefault(); props.onChangeLocation(beer.id) }}>
          {beer.name}
        </a>
      </li> ) }
    </ul>
    <button className="navigation__button">New Beer</button>
  </nav>
)

Navigation.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id:   PropTypes.number.isRequired
  })).isRequired,
  onChangeLocation: PropTypes.func.isRequired
}

export default Navigation
