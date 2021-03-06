import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Subtitle from './templates/subtitle';
import Notes from './templates/notes';

const StyledSubtitle = styled(Subtitle)`
  h1 {
    font-size: 25rem;
    line-height: 23rem;
  }
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>3D!</li>
      <li>WebGL in browser (is hard)</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSubtitle>
    <h1>3D In The Browser</h1>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSubtitle>
);
