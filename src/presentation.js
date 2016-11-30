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
  require('./slides/stops-title').default,
  require('./slides/stops-foursquare').default,
  require('./slides/stops-foursquare-code').default,
  require('./slides/stops-map-pins').default,
  require('./slides/shared-title').default,
  require('./slides/shared-express').default,
  require('./slides/shared-mongo').default,
  require('./slides/shared-mongo-code').default,
  require('./slides/offline-title').default,
  require('./slides/offline-no-js').default,
  require('./slides/offline-sw').default,
  require('./slides/offline-sw-code').default,
  require('./slides/offline-sw-precache').default,
  require('./slides/offline-sw-prerequisite').default,
  require('./slides/ar-title').default,
  require('./slides/ar-parts').default,
  require('./slides/ar-camera-access').default,
  require('./slides/ar-3d-video').default,
  require('./slides/ar-positioning').default,
  require('./slides/ar-frustum-lock').default,
  require('./slides/ar-demo').default,
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
