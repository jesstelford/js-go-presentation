import React from 'react'
import styled from 'styled-components';
import { Code, Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledSlide = styled(Slide)`
  text-align: center;
  background-repeat: no-repeat;
  background-position: right 50% top 30%;
  background-size: auto 40vh;
  background-image: url('./img/mapbox.jpg');
`;

const LinkContainer = styled.div`
  position: relative;
  top: 25vh;
  font-size: 6rem;
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>GMaps alternative</li>
      <li>Recently 1.0 after years</li>
      <li>&raquo; Simple scene == simple code</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSlide>
    <LinkContainer>
      <a href="https://mapbox.com">mapbox.com</a>
    </LinkContainer>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSlide>
);
