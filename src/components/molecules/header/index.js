import React from 'react'
import { array, object, string } from 'prop-types'
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

export default ({ navItems, title, subtitle, theme: { colors } }) => (
  <Header>
    <Title
      content={title}
      subtitle={subtitle}
      color={colors.main}
      subtitleColor={colors.blue}
    />
    <Navigation navItems={navItems} />
  </Header>
)

Header.propTypes = {
  navItems: array,
  title: string,
  subtitle: string,
  theme: object
}

Header.defaultProps = {
  navItems: []
}
