type Theme = {
  colors: {
    primary: string
    secondary: string
    tertiary: string
    text: string
  }
  border: {
    width: string
    radius: string
  }
}

export const themeLight: Theme = {
  colors: {
    primary: 'white',
    secondary: 'black',
    tertiary: 'gray',
    text: 'black'
  },
  border: {
    width: '0.1em',
    radius: '0.25em'
  }
}

export const themeDark: Theme = {
  colors: {
    primary: 'black',
    secondary: 'white',
    tertiary: 'gray',
    text: 'white'
  },
  border: {
    width: '0.1em',
    radius: '0.25em'
  }
}
