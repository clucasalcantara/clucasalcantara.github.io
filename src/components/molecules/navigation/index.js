import React from 'react'
import styled from '@emotion/styled'
// UI Elements
import { NavItem, Icon } from 'components/atoms'

const Items = styled.ul(({ isMobile }) => ({
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row'
}))

const renderMenu = navItems =>
  navItems.map(({ text, path }) => (
    <NavItem key={path} text={text} path={path} />
  ))

export default ({ navItems, isMobile, handleOpen, isOpen }) => {
  return (
    <Items isMobile={isMobile}>
      {isMobile && (
        <Icon
          size="2em"
          iconName={!isOpen ? 'IoIosMenu' : 'IoIosClose'}
          handleClick={() => handleOpen(!isOpen)}
        />
      )}
      {!isMobile && renderMenu(navItems)}
    </Items>
  )
}
