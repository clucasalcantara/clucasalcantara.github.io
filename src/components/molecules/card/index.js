import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div(({ palette, image }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '25rem',
  background: !image ? palette.black : `url("${image}")`,
  padding: '1rem',
  margin: '.5rem',
  borderRadius: '.5rem'
}))

const TransparentText = styled.div({
  background: 'transparent'
})

const Title = styled.div(({ palette }) => ({
  background: 'transparent',
  color: palette.white
}))

const Description = styled.p(({ palette }) => ({
  background: 'transparent',
  color: palette.gray
}))

export default function Card({
  data: { title, description, image = '' },
  palette
}) {
  return (
    <Wrapper palette={palette} image={image}>
      <TransparentText>
        <Title palette={palette}>{title}</Title>
      </TransparentText>
      <TransparentText>
        <Description palette={palette}>{description}</Description>
      </TransparentText>
    </Wrapper>
  )
}

Card.propTypes = {}
