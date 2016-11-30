import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Subtitle from './templates/subtitle';
import Notes from './templates/notes';

const StyledSubtitle = styled(Subtitle)`
  h1 {
    font-size: 34rem;
  }
  h2 {
    font-size: 8rem;
  }
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>PWA's also === speed | full screen | push notifications | etc</li>
      <li>Internet is unreliable</li>
      <li>We want a more app-like experience</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSubtitle>
    <h1>Offline</h1>
    <h2>aka: Progressive Web Apps</h2>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSubtitle>
);
