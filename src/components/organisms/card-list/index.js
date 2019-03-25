import React, { Fragment } from 'react'
import styled from '@emotion/styled'
// UI Elements
import { Title } from 'components/atoms'
import { Card } from 'components/molecules'

const Wrapper = styled.section({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'scroll',
  marginLeft: '-.5rem'
})

const SectionTitle = styled.h3(({ palette }) => ({
  padding: '1rem 0 1rem 0',
  fontWeight: 500,
  color: palette.blue
}))

export default ({
  dataset,
  error,
  theme: { colors },
  darkMode,
  title,
  cardElement = null
}) => {
  const CardElement = cardElement || Card

  if (error)
    return (
      <Wrapper>
        <Title content="Ops, something went wrong...!" />
      </Wrapper>
    )

  return (
    <Fragment>
      <SectionTitle palette={colors}>{title}</SectionTitle>
      <Wrapper>
        {dataset.map(card => (
          <CardElement
            data={card}
            key={card.title}
            palette={colors}
            darkMode={darkMode}
          />
        ))}
      </Wrapper>
    </Fragment>
  )
}
