import React from 'react'
import styled from 'styled-components';
import { ContentSlide, Step } from 'react-presents'
import Notes from './templates/notes';

const Slide = styled(ContentSlide)`
  text-align: center;
  vertical-align: middle;

  & h1 {
    font-size: 10rem;
    padding-right: initial;
  }
`;

const Online = styled.div`
  padding-top: 5vh;
  font-size: 8rem;
`;

const GitHub = styled(Online)`

`;

const Twitter = styled(Online)`

`;

const Talk = styled(Online)`

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
    <GitHub>@jesstelford</GitHub>
    <Twitter>@jesstelford</Twitter>
    <Talk><a href="https://bit.ly/js-go-talk">bit.ly/js-go-talk</a></Talk>

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
