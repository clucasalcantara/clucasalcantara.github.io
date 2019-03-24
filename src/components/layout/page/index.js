import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const Page = styled.div({
  flex: 1,
  padding: '1rem',
  fontFamily: 'Quicksand'
})

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}

export default ({ children, theme }) => {
  const childrenWithInjectedTheme = React.Children.map(children, child =>
    child
      ? React.cloneElement(child, {
          theme,
          isMobile: useWindowWidth() < 320
        })
      : null
  )

  return <Page>{childrenWithInjectedTheme}</Page>
}
