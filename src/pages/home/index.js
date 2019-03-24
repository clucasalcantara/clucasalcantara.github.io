import React from 'react'
// UI Elements
import { Header, Footer } from 'components/molecules'
import { Page } from 'components/layout'

const Home = ({ baseContext: { config, theme } }) => (
  <Page theme={theme}>
    <Header
      title={config.title}
      subtitle={config.subtitle}
      navItems={config.nav}
    />
    <Footer title={config.title} />
  </Page>
)

export default Home
