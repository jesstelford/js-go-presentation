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

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Enabled look controls</li>
      <li><i>Demo: Tilt</i></li>
      <li>Also works in VR!</li>
      <li><i>Demo: VR</i></li>
    </ul>
  </Notes>
)

export default (props) => (
  <Slide>
    <StyledCode highlightLines={[[6, 6], [12, 12]]} value={`
<a-scene>
  <a-box
    position="0 0.5 -2"
    width="0.5" height="1" depth="0.5"
    color="green"
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

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
