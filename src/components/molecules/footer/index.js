import React from 'react'
import styled from '@emotion/styled'

const Footer = styled.footer({
  width: '100%',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-around',
  bottom: 0,
  position: 'fixed'
})

const H4 = styled.h4({
  textTransform: 'uppercase'
})

export default ({ title }) => (
  <Footer>
    <H4>{title}</H4>
    <p>© 2019 Todos os direitos reservados.</p>
  </Footer>
)
