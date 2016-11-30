import React from 'react'
import styled from 'styled-components';
import { Code, Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledCode = styled(Code)`
  text-align: left;

  .cm-s-reactpresents.CodeMirror {
    font-size: 3.5rem;
  }

  .cm-s-reactpresents {
    .CodeMirror-gutters {
      font-size: 3.5rem;
    }
  }
`;

const DemoLink = styled.a`
  font-size: 6rem;
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Injected based on foursquare data</li>
      <li>Can be any data</li>
      <li>Can be monsters too</li>
    </ul>
  </Notes>
)

const code = `
<a-scene>
  <a-map>
    <a-cone position="<long lat>"></a-cone>
    <a-cone position="<long lat>"></a-cone>
    <a-cone position="<long lat>"></a-cone>
    <a-cone position="<long lat>"></a-cone>
  </a-map>
</a-scene>
`.trim()

export default (props) => (
  <Slide>
    <Step index={0} exact>
      <StyledCode value={code} />
    </Step>

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
