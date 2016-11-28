import React from 'react'
import styled from 'styled-components';
import { ContentSlide, Step } from 'react-presents'
import Notes from './templates/notes';

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>...</li>
    </ul>
  </Notes>
)

export default (props) => (
  <ContentSlide>
    <h1>Catching</h1>

    <ul>
      <li>"Let's start by talking about 3D"</li>
      <li>"Done in the browser via WebGL (is hard)"</li>
      <li>Show demo of static scene with ball + monster + background (no tilt</li>
      <li>controls)</li>
      <li>"Simple scene should have simple code: It does, thanks to aframe!"</li>
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

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </ContentSlide>
);
