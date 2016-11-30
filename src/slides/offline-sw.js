import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledSlide = styled(Slide)`
  h1 {
    font-size: 20rem;
  }
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Independent JS</li>
      <li>Listens for events</li>
      <li>Activates on <i>next</i> page load</li>
      <li>But <i>installed</i> on first load</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSlide>
    <h1>Service Workers!</h1>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSlide>
);
