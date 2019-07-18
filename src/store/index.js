import createContext from './create-context'

const initialState = {
  config: {
    name: 'caioalcantara',
    title: 'caio alcantara',
    subtitle: 'Software Engineer',
    nav: [
      {
        text: 'Sobre mim',
        path: '/about'
      },
      {
        text: 'Projetos',
        path: '/projects'
      },
      {
        text: 'Posts',
        path: '#posts'
      },
      {
        text: 'Contato',
        path: '/contato'
      }
    ]
  },
  theme: {
    fontFamily: 'Quicksand',
    colors: {
      main: '#243033',
      black: '#0E1111',
      gray: '#333',
      blue: '#3A3CD4',
      white: '#F5F5FD'
    }
  }
}

export { createContext, initialState }
