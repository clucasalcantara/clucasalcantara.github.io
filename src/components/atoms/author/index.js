import styled from '@emotion/styled'

export default styled.span(({ darkMode }) => ({
  textDecoration: darkMode ? 'underline !important' : 'none'
}))
