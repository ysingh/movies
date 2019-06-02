import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import { movieInfo } from '../services/movies'

const StyledMain = styled.main`
display: grid;
grid-template-columns: repeat(9, 1fr);
column-gap: 10px;
row-gap: 13px;
`

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movieData: []
    }
  }

  async componentDidMount () {
    let movieData = await movieInfo(1)
    this.setState({
      movieData: movieData.data.results
    })
  }

  render () {
    return (
      <StyledMain>
        {this.state.movieData && this.state.movieData.map(movie => <Card key={movie.id} movie={movie} />)}
      </StyledMain>
    )
  }
}

export default Main
