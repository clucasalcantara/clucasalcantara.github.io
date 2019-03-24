import React, { Fragment } from 'react'
import styled from '@emotion/styled'

// UI Elements
import { Title } from 'components/atoms'
import { Card } from 'components/molecules'

const Wrapper = styled.section({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const SectionTitle = styled.h3(({ palette }) => ({
  padding: '.5rem 0rem',
  fontWeight: 500,
  color: palette.blue
}))

export default ({
  dataset,
  error,
  theme: { colors },
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
          <CardElement data={card} key={card.id} palette={colors} />
        ))}
      </Wrapper>
    </Fragment>
  )
}
