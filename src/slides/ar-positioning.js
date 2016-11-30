import React from 'react'
import styled from 'styled-components';
import { Code, Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const Img = styled.img`
  width: 100vh;
  height: 100vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>The view volumn, aka "Frustum"</li>
      <li>Contains 3D objects</li>
      <li>Lock video to the view volume</li>
    </ul>
  </Notes>
)

export default (props) => (
  <Slide>
    <Step index={0} exact>
      <Img src="./img/frustum-1.png" />
    </Step>
    <Step index={1} exact>
      <Img src="./img/frustum-2.png" />
    </Step>
    <Step index={2} exact>
      <Img src="./img/frustum-3.png" />
    </Step>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
