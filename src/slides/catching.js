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

    * "Let's start by talking about 3D"
    * "Done in the browser via WebGL (is hard)"
    * Show demo of static scene with ball + monster + background (no tilt
      controls)
    * "Simple scene should have simple code: It does, thanks to aframe!"
    * <a-scene>...</a-scene>
    * "Aframe also does tilt controls"
    * Demo of same scene with tilt controls enabled
    * <a-scene><a-camera whatever-look-controls /></a-scene>
    * "Aframe even comes with free VR support!"
    * Click the VR mode, pop phone into headset and look around for 10 seconds
    * "But looking at the monster is boring, we want to catch it!"
    * Click + drag the ball, then toss it at the monster
    * <a-scene physics><a-sphere click-drag /></a-scene>
    * "Cannon.js for physics"
    * "This is the power of aframe!"

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </ContentSlide>
);
