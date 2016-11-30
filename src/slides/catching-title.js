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
      <li>Make it interactive</li>
      <li><i>Demo: click + drag</i></li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSubtitle>
    <h1>Catching Monsters</h1>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSubtitle>
);
