import React from 'react'
import styled from '@emotion/styled'

// UI Elements
import { NavItem } from 'components/atoms'

const Wrapper = styled.div(({ isOpen }) => ({
  display: isOpen ? 'block' : 'none',
  transition: isOpen ? 'opacity 3s, height 0' : 'opacity 3s, height 0 3s',
  opacity: isOpen ? '1' : '0'
}))

export default function MobileNav({ navItems, isOpen }) {
  return (
    <Wrapper isOpen={isOpen}>
      {navItems.map(({ text, path }) => (
        <NavItem key={path} text={text} path={path} />
      ))}
    </Wrapper>
  )
}
