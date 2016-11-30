import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Code from './templates/code';
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledSlide = styled(Slide)`
  h2 {
    font-size: 10rem;
  }
`;

const StyledCode = styled(Code)`
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

const code = `
const videoEl = document.querySelector('video');
navigator.mediaDevices.getUserMedia()
  .then(stream => {
    videoEl.srcObject = stream
  })
  `.trim();

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Asks permission first</li>
      <li>Quirks: Can't enumerate without perms</li>
      <li>Video <i>and</i> Audio streams</li>
      <li>Can play / pause / stop like any player</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSlide>
    <section>
      <h2>Accessing the camera</h2>
      <Step index={0} exact>
        <StyledCode value={code} />
      </Step>
      <Step index={1} exact>
        <StyledCode dimLines={[[0, 0], [2, 4]]} value={code} />
      </Step>
    </section>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSlide>
);
