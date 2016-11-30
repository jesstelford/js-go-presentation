import React from 'react'
import styled from 'styled-components';
import { Code, Step } from 'react-presents'
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

const DemoLink = styled.a`
  font-size: 6rem;
`;

const code = `
<a-scene physics>
  <a-cylinder></a-cylinder>
  <a-camera look-controls-enabled="true">
    <a-video-billboard
      position="0 0 0"
    ></a-video-billboard>
  </a-camera>
</a-scene>
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
      <h2>Rendering video in 3D</h2>
      <Step index={0} exact>
        <DemoLink target="_blank" href="https://jesstelford.github.io/aframe-video-billboard/basic/">Demo: Video in 3D</DemoLink>
      </Step>
      <Step index={1} exact>
        <StyledCode value={code} />
      </Step>
    </section>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSlide>
);
