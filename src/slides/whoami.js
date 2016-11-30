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
      <li>First website in 2005</li>
      <li>last 2 years Domain FE TL</li>
      <li>First talk since my son born</li>
      <li>Start with a joke!</li>
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
