import React from 'react'
import styled from '@emotion/styled'

const Page = styled.div({
  flex: 1,
  padding: '1rem',
  fontFamily: 'Quicksand'
})

export default ({ children, theme }) => {
  const childrenWithInjectedTheme = React.Children.map(children, child =>
    child
      ? React.cloneElement(child, {
          theme
        })
      : null
  )

  return <Page>{childrenWithInjectedTheme}</Page>
}
