import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Code from './templates/code';
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
      <li>Enabled look controls</li>
      <li>Also works in VR!</li>
    </ul>
  </Notes>
)

export default (props) => (
  <Slide>
    <Step index={0} exact>
      <StyledCode dimLines={[[0, 5], [7, 11], [13, 14]]} value={`
  <a-scene>
    <a-box
      position="0 0.5 -2"
      width="0.5" height="1" depth="0.5"
      color="blue"
    ></a-box>
    <a-camera look-controls-enabled="true">
      <a-sphere
        position="0 -0.5 -1"
        radius="0.1"
        color="#EF2D5E"
      ></a-sphere>
    </a-camera>
    <a-sky src="./img/background.png"></a-sky>
  </a-scene>
      `.trim()} />
    </Step>
    <Step index={1} exact>
      <DemoLink target="_blank" href="https://aframe-scene-motion-gkmcmtptbg.now.sh">Demo: Motion Sensors</DemoLink>
    </Step>

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
