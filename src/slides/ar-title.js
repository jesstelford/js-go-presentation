import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Subtitle from './templates/subtitle';
import Notes from './templates/notes';

const StyledSubtitle = styled(Subtitle)`
  h1 {
    font-size: 20rem;
  }
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>VR cool, not interactive with environment</li>
      <li>AR === 3D in world around you</li>
      <li>&raquo; How to do it in JS</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSubtitle>
    <h1>Augmented Reality</h1>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSubtitle>
);
