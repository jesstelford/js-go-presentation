import React from 'react'
import {HashRouter} from 'react-router';
import { Presentation, Slide } from 'react-presents'
import styled from 'styled-components';
import Theme from './theme';

const slides = [
  require('./slides/whoami').default,
  require('./slides/intro').default,
  require('./slides/3d-title').default,
  require('./slides/3d-aframe').default,
  require('./slides/3d-scene').default,
  require('./slides/3d-tilt').default,
  require('./slides/catching-title').default,
  require('./slides/catching-code').default,
  require('./slides/location-title').default,
  require('./slides/location-tools').default,
  require('./slides/location-geolocation').default,
  require('./slides/location-3d').default,
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
