import React from 'react'
import styled from 'styled-components';
import { Code, Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledSlide = styled(Slide)`
  text-align: center;
  background-repeat: no-repeat;
  background-position: right 50% top 50%;
  background-size: 95vw auto;
  background-image: url('./img/foursquare.png');
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>✓ APIs ✓ Generous rate limits"</li>
      <li>Crowdsourced Data of real places</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSlide>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSlide>
);
