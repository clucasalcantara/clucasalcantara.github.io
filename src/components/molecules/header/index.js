import React from 'react'
import { array, bool, object, string } from 'prop-types'
import styled from '@emotion/styled'
// UI Elements
import { Title } from '../../atoms'
import Navigation from '../navigation'

const Header = styled.div({
  textTransform: 'uppercase',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export default ({
  navItems,
  title,
  subtitle,
  theme: { colors },
  isMobile,
  darkMode
}) => (
  <Header palette={colors} darkMode={darkMode}>
    <Title
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
