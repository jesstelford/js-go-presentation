import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledSlide = styled(Slide)`
  h2 {
    font-size: 24rem;
  }
`;

const List = styled.ol`
  display: inline-block;
  text-align: left;
  font-size: 6rem;
  margin-top: 0
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>-</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSlide>
    <section>
      <h2>AR in JS</h2>
      <List>
        <li>Accessing the camera</li>
        <li>Rendering video in 3D</li>
        <li>Positioning items</li>
      </List>
    </section>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSlide>
);
