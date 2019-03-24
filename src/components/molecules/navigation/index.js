import React from 'react'
import styled from '@emotion/styled'
// UI Elements
import { NavItem } from 'components/atoms'

const Navigation = styled.div({
  padding: '.5rem'
})

const Items = styled.ul({
  display: 'flex',
  padding: '1rem'
})

export default ({ navItems }) => (
  <Navigation>
    <Items>
      {navItems.map(({ text, path }) => (
        <NavItem key={path} text={text} path={path} />
      ))}
    </Items>
  </Navigation>
)
