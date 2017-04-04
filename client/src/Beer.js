import React from 'react'

const Beer = (props) => {
  var { name, style, brewery } = props.currentBeer
  return (
    <div className={`${props.className} beer-details`}>
      <h1>{name}</h1>
      <div className="beer-details__summary">
        <p><strong>Style: </strong>{style}</p>
        <p><strong>Brewery: </strong>{brewery}</p>
      </div>
    </div>
  )
}

export default Beer
