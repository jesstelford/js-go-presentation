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
<a-scene physics>
  <a-cylinder></a-cylinder>
  <a-camera look-controls-enabled="true">
    <a-video-billboard
      position="0 0 0"
      frustum-lock
    ></a-video-billboard>
  </a-camera>
</a-scene>
  `.trim();

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Locked to camera view volume</li>
      <li>Ie; will follow camera around</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSlide>
    <section>
      <Step index={0} exact>
        <StyledCode value={code} />
      </Step>
      <Step index={1} exact>
        <StyledCode dimLines={[[0, 2], [7, 8]]} value={code} />
      </Step>
    </section>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSlide>
);
