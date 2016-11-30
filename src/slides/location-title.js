import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Subtitle from './templates/subtitle';
import Notes from './templates/notes';

const StyledSubtitle = styled(Subtitle)`
  h1 {
    font-size: 27rem;
    line-height: 25rem;
  }
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Maps apps like Google / Apple are obv.</li>
      <li>OpenStreetMap too! FOSS <i>data only</i>.</li>
      <li>Displaying called "Slippy Maps"</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSubtitle>
    <h1>Location Aware</h1>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSubtitle>
);
