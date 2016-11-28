import React from 'react'
import {HashRouter} from 'react-router';
import { Presentation, Slide } from 'react-presents'
import styled from 'styled-components';
import Theme from './theme';

const slides = [
  require('./slides/title').default,
  require('./slides/foo').default,
  require('./slides/another').default,
]

const StyledWrapper = styled.div`
  height: 100%;
`;

export default () => (
  <StyledWrapper>
    <Theme />
    <Presentation disableTheme router={HashRouter}>
      {({presentation}) => (
        slides.map((Component, index) => (
          <Slide
            key={index}
            render={props => <Component {...props} presentation={presentation} />}
          />
        ))
      )}
    </Presentation>
  </StyledWrapper>
)
