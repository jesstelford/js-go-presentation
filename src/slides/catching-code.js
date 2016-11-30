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

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Physics == Cannon.js</li>
      <li>Aframe === Powerful!</li>
    </ul>
  </Notes>
)

export default (props) => (
  <Slide>
    <StyledCode dimLines={[[1, 1], [3, 7], [10, 13]]} value={`
<a-scene physics>
  <a-box
    static-body
    ...
  ></a-box>
  <a-sky src="./img/background.png"></a-sky>
  <a-camera look-controls-enabled="true">
    <a-sphere
      click-drag
      dynamic-body="mass: 20;"
      ...
    ></a-sphere>
  </a-camera>
</a-scene>
    `.trim()} />

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
