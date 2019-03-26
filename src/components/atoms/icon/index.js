import React from 'react'
import * as Ionicons from 'react-icons/io'
import styled from '@emotion/styled'

const Icon = styled.div({
  padding: '.3rem',
  background: 'transparent',
  cursor: 'pointer'
})

export default ({ iconName, handleClick }) => {
  const IconComponent = Ionicons[iconName]

  return (
    <Icon>
      <IconComponent onClick={() => handleClick()} />
    </Icon>
  )
}
