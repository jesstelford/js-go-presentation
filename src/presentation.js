import React from 'react'
import {HashRouter} from 'react-router';
import { Presentation, Slide } from 'react-presents'
import styled from 'styled-components';
import Theme from './theme';

const slides = [
  require('./slides/whoami').default,
  require('./slides/intro').default,
  require('./slides/catching-title').default,
  require('./slides/catching').default,
  require('./slides/location').default,
  require('./slides/homescreen').default,
  require('./slides/stops').default,
  require('./slides/shared').default,
  require('./slides/offline').default,
  require('./slides/ar').default,
  require('./slides/outro').default,
];

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
