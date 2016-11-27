import React from 'react'
import { injectGlobal } from 'styled-components'

const Theme = React.createClass({

  componentWillMount () {
    injectGlobal`${globalStyles}`
  },

  render () {
    return (
      <link
        href='https://fonts.googleapis.com/css?family=Droid+Sans|Roboto+Condensed:700'
        rel='stylesheet'
        type='text/css'
      />
    )
  },
});

const globalStyles = `
  html, body {
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: inherit;
  }

  html {
    font-size: 1vw;
  }
  body {
    font-family: 'Droid Sans', sans-serif;
    font-size: 20px;
  }

  #js-go {
    height: 100%;
  }
  h1, h2, h3, h4 {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    margin: 0 0 1rem;
  }
  h1 {
    font-size: 4.5rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1rem;
  }

  li {
    margin: 0 0 0.5rem;
  }

  html, body, #root {
    height: 100%;
  }

  a {
    color: #F92672;
    text-decoration: none;
  }

  p {
    margin: 0 0 1rem;
  }

  code {
    background: #e7e8e2;
    border-radius: 5px;
    font-family: monospace;
  }

  button {
    font-family: 'Roboto Condensed', sans-serif;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #F92672;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #CFD8DC;
    cursor: default;
  }
`

export default Theme;
