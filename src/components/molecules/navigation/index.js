import React from 'react'
import styled from '@emotion/styled'
// UI Elements
import { NavItem } from 'components/atoms'

const Items = styled.ul({
  display: 'flex'
})

export default ({ navItems, isMobile }) => (
  <Items>
    {!isMobile &&
      navItems.map(({ text, path }) => (
        <NavItem key={path} text={text} path={path} />
      ))}
  </Items>
)
