import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  html {height:100%} 
  body {
      margin:0;
      padding:4rem;
      font-family: din regular;
      box-sizing: border-box;
      background: #C5D3E6;
  }

  @font-face {
  font-family: 'din regular';
  font-style: normal;
  font-weight: normal;
  src: local('D-DIN Regular'), url('./static/fonts/din/D-DIN.woff') format('woff');
  }
  
  
  @font-face {
  font-family: 'din italic';
  font-style: normal;
  font-weight: normal;
  src: local('D-DIN DIN-Italic'), url('./static/fonts/din/D-DIN-Italic.woff') format('woff');
  }
  
  
  @font-face {
  font-family: 'din bold';
  font-style: normal;
  font-weight: normal;
  src: local('D-DIN DIN-Bold'), url('./static/fonts/din/D-DIN-Bold.woff') format('woff');
  }
  
  
  @font-face {
  font-family: 'din condensed regular';
  font-style: normal;
  font-weight: normal;
  src: local('D-DIN Condensed Regular'), url('./static/fonts/din/D-DINCondensed.woff') format('woff');
  }

  @font-face {
  font-family: 'din condensed bold';
  font-style: normal;
  font-weight: normal;
  src: local('D-DIN Condensed DINCondensed-Bold'), url('./static/fonts/din/D-DINCondensed-Bold.woff') format('woff');
  }

  @font-face {
  font-family: 'din exp';
  font-style: normal;
  font-weight: normal;
  src: local('D-DIN Exp Regular'), url('./static/fonts/din/D-DINExp.woff') format('woff');
  }
  
  
  @font-face {
  font-family: 'din exp';
  font-style: italic;
  font-weight: normal;
  src: local('D-DIN Exp DINExp-Italic'), url('./static/fonts/din/D-DINExp-Italic.woff') format('woff');
  }
  
  @font-face {
  font-family: 'din exp';
  font-style: normal;
  font-weight: bold;
  src: local('D-DIN Exp DINExp-Bold'), url('./static/fonts/din/D-DINExp-Bold.woff') format('woff');
  }
`

const theme = {
  colors: {
    primary: '#17ffd4',
    dark: '#033719'
  },
}

export default class BRDApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    )
  }
}