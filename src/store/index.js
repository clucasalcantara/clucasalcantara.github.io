import createContext from './create-context'

const initialState = {
  config: {
    name: 'caioalcantara',
    title: 'caio alcantara',
    subtitle: 'Software Engineer',
    nav: [
      {
        text: 'Sobre mim',
        path: '/#1'
      },
      {
        text: 'Projetos',
        path: '/#2'
      },
      {
        text: 'Posts',
        path: '/#3'
      },
      {
        text: 'Contato',
        path: '/#4'
      }
    ]
  },
  theme: {
    fontFamily: 'Quicksand',
    colors: {
      main: '#243033',
      black: '#0E1111',
      gray: '#3D4A4D',
      blue: '#2E2F8F',
      white: '#F5F5FD'
    }
  }
}

export { createContext, initialState }
