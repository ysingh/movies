import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import { movieInfo } from '../services/movies'

const StyledMain = styled.main`
display: grid;
column-gap: 10px;
row-gap: 13px;
@media (min-width: 1025px) {
  grid-template-columns: repeat(9, 1fr);
}
@media (max-width: 1024px) and (min-width: 768px) {
  grid-template-columns: repeat(6, 1fr);
}
@media (max-width: 425px) and (min-width: 375px) {
  grid-template-columns: repeat(4, 1fr);
}
@media (max-width: 375px) {
  grid-template-columns: 1fr;
}
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
