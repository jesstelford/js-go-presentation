import React from 'react'
import styled from 'styled-components';
import { Code, Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const DemoLink = styled.a`
  font-size: 6rem;
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Click + drag ball</li>
      <li>Throw it to catch</li>
    </ul>
  </Notes>
)

export default (props) => (
  <Slide>
    <DemoLink target="_blank" href="https://lib-gpcjtgkzqn.now.sh">Demo: Catching Monsters</DemoLink>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
