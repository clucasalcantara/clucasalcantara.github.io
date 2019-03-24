import React from 'react'
// UI Elements
import { CardList } from 'components/organisms'
import { Header, Hero, Footer } from 'components/molecules'
import { Page } from 'components/layout'

const ProjectMockCards = [
  {
    id: 0,
    title: 'Brian',
    description:
      'Um assistente pessoal escrito em node que tem o objetivo de se tornar o mais próximo do jarvis possível'
  },
  {
    id: 1,
    title: 'Brian',
    description:
      'Um assistente pessoal escrito em node que tem o objetivo de se tornar o mais próximo do jarvis possível'
  },
  {
    id: 2,
    title: 'Brian',
    description:
      'Um assistente pessoal escrito em node que tem o objetivo de se tornar o mais próximo do jarvis possível'
  }
]

const PostsMockCards = [
  {
    id: 0,
    title: 'React Patterns — Começando pelo Render Props',
    description:
      'Você já deve ter ouvido um monte de gente falar sobre “padrões de código no JavaScript (React, specially)”. Mas você sabe o que são padrões de código? O que são React Patterns e como eles se aplicam?'
  }
]

const Home = ({ baseContext: { config, theme } }) => (
  <Page theme={theme}>
    <Header
      title={config.title}
      subtitle={config.subtitle}
      navItems={config.nav}
    />
    <Hero />
    <CardList dataset={PostsMockCards} title="Últimos textos" />
    <CardList dataset={ProjectMockCards} title="Projetos em destaque" />
    <Footer title={config.title} />
  </Page>
)

export default Home
