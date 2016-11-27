import React from 'react'
import {HashRouter} from 'react-router';
import { Presentation, Slide } from 'react-presents'
import styled from 'styled-components';
import Theme from './theme';

const slides = [
  require('./slides/title').default
]

const StyledWrapper = styled.div`
  height: 100%;
`;

export default () => (
  <StyledWrapper>
    <Theme />
    <Presentation disableTheme router={HashRouter}>
      {slides.map((component, index) => (
        <Slide component={component} key={index} />
      ))}
    </Presentation>
  </StyledWrapper>
)
