import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

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

export default function Logo({ content, subtitle, color, subtitleColor }) {
  return (
    <Link to="/">
      <Title color={color}>
        <div className="content">{content}</div>
        {subtitle && <SubTitle color={subtitleColor}>{subtitle}</SubTitle>}
      </Title>
    </Link>
  )
}

Logo.propTypes = {
  content: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  subtitleColor: PropTypes.string
}

Logo.defaultProps = {
  content: 'LOGO',
  subtitle: 'Sua logo aqui',
  color: 'black',
  subtitleColor: 'blue'
}
