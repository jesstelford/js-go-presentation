import React from 'react'
import styled from 'styled-components';
import { Code, Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledSlide = styled(Slide)`
  text-align: center;
  background-repeat: no-repeat;
  background-position: right 50% top 30%;
  background-size: 90vw auto;
  background-image: url('./img/mongo.jpg');
`;

const LinkContainer = styled.div`
  position: relative;
  top: 30vh;
  font-size: 6rem;
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Geo searching</li>
      <li>Fast!</li>
      <li>Self hosted, or SAAS</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSlide>
    <LinkContainer>
      <a href="https://www.mongodb.com"><code>npm install mongodb</code></a>
    </LinkContainer>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSlide>
);
