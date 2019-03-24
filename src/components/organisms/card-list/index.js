import React from 'react'

// UI Elements
import { Title } from 'components/atoms'
import { Card } from 'components/molecules'

const CardList = ({ cards, error }) => {
  if (error)
    return (
      <div className="card-list">
        <Title content="Ops, something went wrong...!" />
      </div>
    )

  return (
    <div className="card-list">
      {cards.map(card => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  )
}

export default CardList
