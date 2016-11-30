import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Code from './templates/code';
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledCode = styled(Code)`
  text-align: left;

  .cm-s-reactpresents.CodeMirror {
    font-size: 2.5rem;
  }

  .cm-s-reactpresents {
    .CodeMirror-gutters {
      font-size: 2.5rem;
    }
  }
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Aframe === 3D in as few lines as 2D</li>
      <li>Kind of like React - reusable components</li>
    </ul>
  </Notes>
)

const code = `
<a-scene>
  <a-map></a-map>
</a-scene>

<script>
  const mapEl = document.querySelector('a-map');

  navigator.geolocation.watchPosition(
    position => {
      const long = position.coords.longitude;
      const lat = position.coords.latitude;

      mapEl.setAttribute('map', 'center', \`\${long} \${lat}\`);
    },
    console.error.bind(console),
    { enableHighAccuracy: true }
  );
</script>
`.trim()

export default (props) => (
  <Slide>
    <Step index={0} exact>
      <StyledCode value={code} />
    </Step>
    <Step index={1} exact>
      <StyledCode dimLines={[[0, 0], [2, 11], [13, 17]]} value={code} />
    </Step>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
