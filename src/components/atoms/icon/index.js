import React from 'react'
import * as Ionicons from 'react-icons/io'
import styled from '@emotion/styled'

const Icon = styled.div({
  padding: '.3rem',
  background: 'transparent'
})

export default ({ iconName }) => {
  const IconComponent = Ionicons[iconName]

  return (
    <Icon>
      <IconComponent />
    </Icon>
  )
}
