import React, { PropTypes } from 'react'

const BeersTable = (props) => (
  <div>
    <h1>Beer List</h1>
    <table className="beers-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Style</th>
        </tr>
      </thead>
      <tbody>
        { props.beers.map ( beer =>
          <tr key={beer.id}>
            <td>{beer.name}</td>
            <td>{beer.style}</td>
          </tr>)}
      </tbody>
    </table>
  </div>
)

BeersTable.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired
  })).isRequired
}
export default BeersTable
