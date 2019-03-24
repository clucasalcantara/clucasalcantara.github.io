import React from 'react'
import styled from '@emotion/styled'

// UI Elements
import Toggle from 'react-toggle'
import { Icon } from 'components/atoms'
import 'react-toggle/style.css'

const DarkMode = styled.div({
  display: 'flex',
  padding: '1rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'transparent'
})

export default ({ darkMode, setDarkMode }) => (
  <DarkMode>
    <Icon iconName="IoIosSunny" />
    <Toggle
      defaultChecked={darkMode}
      icons={false}
      onChange={() => setDarkMode(!darkMode)}
    />
    <Icon iconName="IoMdMoon" />
  </DarkMode>
)
