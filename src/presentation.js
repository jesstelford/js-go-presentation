import React from 'react'
import {HashRouter} from 'react-router';
import { Presentation, Slide } from 'react-presents'

const slides = [
  require('./slides/demo').default
]

export default () => (
  <Presentation router={HashRouter}>
    {slides.map((component, index) => (
      <Slide component={component} key={index} />
    ))}
  </Presentation>
)
