import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Title = styled.div(({ color }) => ({
  padding: '.5rem',
  justifyContent: 'center',
  textTransform: 'uppercase',
  color: color || 'black'
}))

const SubTitle = styled.div(({ color }) => ({
  fontSize: '.8rem',
  fontWeight: 300,
  color: color || 'blue'
}))

export default ({ content, subtitle, color, subtitleColor }) => (
  <Title color={color}>
    <div className="content">{content}</div>
    {subtitle && <SubTitle color={subtitleColor}>{subtitle}</SubTitle>}
  </Title>
)

Title.propTypes = {
  content: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  subtitleColor: PropTypes.string
}
