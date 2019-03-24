import React from 'react'
import styled from '@emotion/styled'

// UI Elements
import Link from '../link'

const NavItem = styled.li({
  padding: '.5rem',
  listStyle: 'none'
})

export default ({ text, path }) => (
  <NavItem>
    <Link href={path} text={text} />
  </NavItem>
)
