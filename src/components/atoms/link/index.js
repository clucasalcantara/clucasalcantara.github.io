import React from 'react'
import styled from '@emotion/styled'

const Link = styled.a({
  textDecoration: 'none',
  color: 'black'
})

export default ({ text, href }) => <Link href={href}>{text}</Link>
