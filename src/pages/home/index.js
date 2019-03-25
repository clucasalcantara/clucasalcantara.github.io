import React, { useState, useEffect } from 'react'
// UI Elements
import { CardList } from 'components/organisms'
import { Header, Hero, Footer } from 'components/molecules'
import { Page } from 'components/layout'

// Services
import { getMediumFeed } from 'services'

const Home = ({ baseContext: { config, theme } }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getMediumFeed('clucasalcantara').then(({ items }) =>
      setPosts(items.filter(post => post.categories.length))
    )
  }, [])

  return (
    <Page theme={theme}>
      <Header
        title={config.title}
        subtitle={config.subtitle}
        navItems={config.nav}
      />
      <Hero />
      <CardList id="posts" dataset={posts} title="Últimos textos" />
      <Footer title={config.title} />
    </Page>
  )
}

export default Home
