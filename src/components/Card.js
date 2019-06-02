import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
background: ${props => `url(${props.poster})`};
background-size: contain;
background-repeat: no-repeat;
width: 100%;
height: 0;
padding-top: 150%;
margin: 0;
:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  opacity: .8;
  transform: scale(1.1)

}
`

class Card extends React.Component {
  render () {
    console.log(this.props.movie)
    return (
      <StyledCard poster={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} />
    )
  }
}

export default Card
