import React from 'react'
import styled from 'styled-components'

const CenteredHeader = styled.h1`
  text-align: center;
  font-variant-caps: all-small-caps;
  color: #e6e6e6;
  margin: 5px 0 8px;
  padding: 0;
`

const Header = () => {
  return (
    <header>
      <CenteredHeader>Movies</CenteredHeader>
    </header>
  )
}

export default Header
