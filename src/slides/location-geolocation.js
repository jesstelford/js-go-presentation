import React from 'react'
import styled from 'styled-components';
import { Code, Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledCode = styled(Code)`
  text-align: left;

  .cm-s-reactpresents.CodeMirror {
    font-size: 3rem;
  }

  .cm-s-reactpresents {
    .CodeMirror-gutters {
      font-size: 3rem;
    }
  }
`;

const DemoLink = styled.a`
  font-size: 6rem;
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>mapboxgl options: center, etc</li>
      <li><code>enableHighAccuracy</code> skips device "estimate"</li>
      <li><i><a target="_blank" href="https://jesstelford.github.io/aframe-map/gps/">Demo 3D map</a></i></li>
    </ul>
  </Notes>
)

const code = `
const map = new mapboxgl.Map({
  ...
});

navigator.geolocation.watchPosition(
  position => {
    const long = position.coords.longitude;
    const lat = position.coords.latitude;
    map.setCenter([long, lat]);
  },
  console.error.bind(console),
  {
    enableHighAccuracy: true
  }
);
`.trim()

export default (props) => (
  <Slide>
    <Step index={0} exact>
      <StyledCode value={code} />
    </Step>
    <Step index={1} exact>
      <StyledCode dimLines={[[0, 3], [8, 10], [14, 14]]} value={code} />
    </Step>
    <Step index={2} exact>
      <DemoLink target="_blank" href="https://jesstelford.github.io/aframe-map/gps/">Demo: 3D Maps</DemoLink>
    </Step>

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
