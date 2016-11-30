import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Code from './templates/code';
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledCode = styled(Code)`
import Code from './templates/code';
  text-align: left;

  .cm-s-reactpresents.CodeMirror {
    font-size: 3.2rem;
  }

  .cm-s-reactpresents {
    .CodeMirror-gutters {
      font-size: 3.2rem;
    }
  }
`;

const DemoLink = styled.a`
  font-size: 6rem;
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Using <code>fetch()</code> spec</li>
      <li>Radius <i>or</i> bounding box</li>
      <li>Radius == updating location <i>every move</i></li>
      <li>Break up the world into chunks + cache</li>
    </ul>
  </Notes>
)

const fetchCode = `
const ne = {lat, long};
const sw = {lat, long};
fetch(
  \`https://api.foursquare.com/v2/venues/search\` +
  \`?client_id=...&client_secret=...\` +
  \`&ne=\${ne.lat},\${ne.long}\` +
  \`&sw=\${sw.lat},\${sw.long}\` +
  \`&limit=50\`
)
.then(res => res.json())
.then(res => res.response.venues);
`.trim();

export default (props) => (
  <Slide>
    <Step index={0} exact>
      <StyledCode value={fetchCode} />
    </Step>
    <Step index={1} exact>
      <StyledCode dimLines={[[2, 4], [8, 10]]} value={fetchCode} />
    </Step>
    <Step index={2} exact>
      <DemoLink target="_blank" href="https://jesstelford.github.io/aframe-map/poi/">Demo: Drop Locations</DemoLink>
    </Step>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
