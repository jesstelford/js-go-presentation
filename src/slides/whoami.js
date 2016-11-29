import React from 'react'
import styled from 'styled-components';
import { ContentSlide, Step } from 'react-presents'
import Slide from './templates/slide';
import Notes from './templates/notes';

const Online = styled.div`
  padding-top: 5vh;
  font-size: 8rem;
`;

const StyledSlide = styled(Slide)`
  padding: 10vh 0;
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>1998: Making games</li>
      <li>2009: AR game on DS</li>
      <li>2010: Web dev</li>
      <li>Early Foursquare, Zombie Hood, geocaching</li>
      <li>Now; FE TL @ Domain.com.au</li>
      <li>Pokemon Go is an interesting cross section of above</li>
      <li>Possible on web?</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSlide>
    <h1>Hi, I'm Jess Telford 👋</h1>
    <Online>@jesstelford</Online>
    <Online><a href="https://bit.ly/js-go-talk">bit.ly/js-go-talk</a></Online>

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSlide>
);
