import React from 'react'
import styled from 'styled-components';
import { ContentSlide, Step } from 'react-presents'
import Notes from './templates/notes';

const Slide = styled(ContentSlide)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10vh 0;
  text-align: center;

  & h1 {
    font-size: 10rem;
    padding-right: initial;
  }
`;

const Online = styled.div`
  padding-top: 5vh;
  font-size: 8rem;
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
  <Slide>
    <h1>Hi, I'm Jess Telford 👋</h1>
    <Online>@jesstelford</Online>
    <Online><a href="https://bit.ly/js-go-talk">bit.ly/js-go-talk</a></Online>

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
