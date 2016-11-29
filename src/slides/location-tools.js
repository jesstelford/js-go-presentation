import React from 'react'
import styled from 'styled-components';
import { Code, Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background-repeat: no-repeat;
  background-position: right 50% top 30%;
  background-size: auto 40vh;
`;

const LeafletSlide = styled(Container)`
  background-image: url('./img/leaflet.png');
`;

const MapboxSlide = styled(Container)`
  background-image: url('./img/mapbox.jpg');
`;

const DemoLink = styled.a`
  font-size: 6rem;
`;

const LinkContainer = styled.div`
  position: relative;
  top: 65vh;
  font-size: 6rem;
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>GMaps alternatives, FOSS</li>
      <li>Leaflet @ 1.0 after years</li>
      <li>Mapbox uses WebGL, and stylable</li>
      <li>Permission needed to get location</li>
    </ul>
  </Notes>
)

export default (props) => (
  <Slide>
    <Step index={0} exact>
      <LeafletSlide>
        <LinkContainer>
          <a href="http://leafletjs.com">leafletjs.com</a>
        </LinkContainer>
      </LeafletSlide>
    </Step>
    <Step index={1} exact>
      <MapboxSlide>
        <LinkContainer>
          <a href="https://mapbox.com">mapbox.com</a>
        </LinkContainer>
      </MapboxSlide>
    </Step>
    <Step index={2} exact>
      <DemoLink target="_blank" href="https://map-with-geolocation-udyprpclzd.now.sh">Demo: Mapbox-GL</DemoLink>
    </Step>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
