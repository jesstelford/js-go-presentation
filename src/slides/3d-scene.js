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
      <li>Aframe === HTML custom elements</li>
      <li>Not taking advantage of device sensors</li>
      <li>&raquo; Tilt controls</li>
    </ul>
  </Notes>
)

export default (props) => (
  <Slide>
    <StyledCode value={`
<a-scene>
  <a-box
    position="0 0.5 -2"
    width="0.5" height="1" depth="0.5"
    color="green"
  ></a-box>
  <a-sphere
    position="0 -0.5 -1"
    radius="0.1"
    color="#EF2D5E"
  ></a-sphere>
  <a-sky src="./img/background.png"></a-sky>
</a-scene>
    `.trim()} />

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
