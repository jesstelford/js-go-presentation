import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Subtitle from './templates/subtitle';
import Notes from './templates/notes';

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>3D!</li>
      <li>WebGL in browser (is hard)</li>
      <li>Demo</li>
      <li>Simple scene == simple code: Aframe!</li>

      <li><a-scene>...</a-scene></li>
      <li>"Aframe also does tilt controls"</li>
      <li>Demo of same scene with tilt controls enabled</li>
      <li><a-scene><a-camera whatever-look-controls /></a-scene></li>
      <li>"Aframe even comes with free VR support!"</li>
      <li>Click the VR mode, pop phone into headset and look around for 10 seconds</li>
      <li>"But looking at the monster is boring, we want to catch it!"</li>
      <li>Click + drag the ball, then toss it at the monster</li>
      <li><a-scene physics><a-sphere click-drag /></a-scene></li>
      <li>"Cannon.js for physics"</li>
      <li>"This is the power of aframe!"</li>
    </ul>
  </Notes>
)

export default (props) => (
  <Subtitle>
    <h1>Catching Monsters</h1>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Subtitle>
);
