import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

// UI Elements
import { Author } from 'components/atoms'

const Wrapper = styled.div({
  marginTop: '1rem',
  textAlign: 'center',
  padding: '.5rem',
  fontSize: '.7rem'
})

export default function Credits({ description, author, url, darkMode }) {
  return (
    <Wrapper>
      {description} by{' '}
      <Link to={url} target="_blank">
        <Author darkMode={darkMode}>{`${author}`}</Author>
      </Link>
    </Wrapper>
  )
}
