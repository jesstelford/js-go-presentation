import React from 'react'
import styled from 'styled-components';
import { Code, Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledSlide = styled(Slide)`
  text-align: center;
  background-repeat: no-repeat;
  background-position: right 50% top 30%;
  background-size: auto 60vh;
  background-image: url('./img/aframe.jpg');
`;

const LinkContainer = styled.div`
  position: relative;
  top: 30vh;
  font-size: 6rem;
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>By Mozilla</li>
      <li>pushing WebVR spec</li>
      <li>(more on WebVR later @ JSconfAU 2016)</li>
      <li>&raquo; Simple scene == simple code</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSlide>
    <LinkContainer>
      <a href="https://aframe.io">aframe.io</a>
    </LinkContainer>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSlide>
);
