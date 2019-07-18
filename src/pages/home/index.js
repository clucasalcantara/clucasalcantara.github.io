import React, { useState, useEffect } from 'react'
// UI Elements
import { CardList } from 'components/organisms'
import { Hero } from 'components/molecules'
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
    <Page theme={theme} config={config}>
      <Hero />
      <CardList id="posts" dataset={posts} title="Últimos textos" />
    </Page>
  )
}

export default Home
