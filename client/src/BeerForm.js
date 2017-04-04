import React from 'react'

import styled from 'styled-components'

const TextInput = styled.input`
  font-size: 1rem;
  line-height: 1.25;
  padding: 0.5rem 1rem;
  display: block;
  width: 100%;
`

class BeerForm extends React.Component {
  constructor() {
    super()
    this.state = {name: '', style: ''}
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleStyleChange = (e) => {
    this.setState({style: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.insertBeer(this.state)
    this.setState({name: '', style: ''})
  }

  render() {
    return (
      <div className="new-beer-form">
        <h1>New Beer</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="beer-name">Name</label>
            <TextInput
                id="beer-name"
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}/>
          </div>
          <div>
            <label for="beer-style">Style</label>
            <TextInput
                id="beer-style"
                type="text"
                value={this.state.style}
                onChange={this.handleStyleChange}
            />
          </div>
          <div>
            <button type="submit">Create Beer</button>
          </div>
        </form>
      </div>
    )
  }
}
export default BeerForm
