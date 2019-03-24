import createContext from './create-context'

const initialState = {
  config: {
    name: 'caioalcantara',
    title: 'caio alcantara',
    subtitle: 'Software Engineer',
    nav: [
      {
        text: 'Sobre mim',
        path: '/#'
      },
      {
        text: 'Projetos',
        path: '/#'
      },
      {
        text: 'Posts',
        path: '/#'
      },
      {
        text: 'Contato',
        path: '/#'
      }
    ]
  },
  theme: {
    fonts: {
      default: 'Quicksand'
    },
    colors: {
      main: '#243033',
      black: '#0E1111',
      gray: '#3D4A4D',
      blue: '#00ACB4',
      white: '#DAE6E6'
    }
  }
}

export { createContext, initialState }
