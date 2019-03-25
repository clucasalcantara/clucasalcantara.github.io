import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Wrapper = styled.div(({ palette, darkMode }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '25rem',
  minHeight: '12rem',
  background: darkMode ? palette.main : palette.black,
  padding: '1rem',
  margin: '.5rem',
  borderRadius: '.5rem'
}))

const TransparentText = styled.div({
  background: 'transparent',
  zIndex: 2
})

// Extract to Tag ITEM
const Category = styled.div(({ palette }) => ({
  marginTop: '1rem',
  display: 'flex',
  flexWrap: 'wrap',
  background: 'transparent',
  color: palette.white
}))

const CategoryItem = styled.div(({ palette }) => ({
  margin: '.5rem',
  padding: '.5rem',
  fontSize: '.7rem',
  background: `${palette.blue} !important`,
  color: 'white'
}))
// Extract to Tag ITEM

const Title = styled.div(({ palette }) => ({
  background: 'transparent',
  color: palette.white,
  fontSize: '1.5rem',
  zIndex: 2
}))

export default function Card({
  data: { title, categories = [], link = '' },
  palette,
  darkMode
}) {
  const postUrl = `//${link.replace('https://', '')}`

  return (
    <Link to={postUrl} target="_blank">
      <Wrapper palette={palette} darkMode={darkMode}>
        <TransparentText>
          <Title palette={palette} darkMode={darkMode}>
            {title}
          </Title>
        </TransparentText>
        {categories.length > 0 && (
          <Category palette={palette}>
            {categories.map(category => (
              <CategoryItem palette={palette}>{category}</CategoryItem>
            ))}
          </Category>
        )}
      </Wrapper>
    </Link>
  )
}

Card.propTypes = {}
