import React from 'react'
import { array, bool, object, string } from 'prop-types'
import styled from '@emotion/styled'
// UI Elements
import { Logo } from 'components/atoms'
import Navigation from '../navigation'

const Header = styled.div(({ palette, darkMode }) => ({
  top: 0,
  left: 0,
  textTransform: 'uppercase',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
  position: 'sticky',
  background: darkMode ? palette.black : palette.white,
  transition: 'all .2s ease-in'
}))

export default ({
  navItems,
  title,
  subtitle,
  theme: { colors },
  isMobile,
  darkMode
}) => (
  <Header palette={colors} darkMode={darkMode}>
    <Logo
      content={title}
      subtitle={subtitle}
      color={colors.main}
      subtitleColor={colors.blue}
    />
    <Navigation navItems={navItems} isMobile={isMobile} />
  </Header>
)

Header.propTypes = {
  isMobile: bool,
  navItems: array,
  title: string,
  subtitle: string,
  theme: object
}

Header.defaultProps = {
  navItems: []
}
