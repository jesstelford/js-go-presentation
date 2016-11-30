import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledSlide = styled(Slide)`
  h2 {
    font-size: 12rem;
  }
`;

const List = styled.ul`
  display: inline-block;
  text-align: left;
  font-size: 6rem;
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>manifest describes app &amp; entry point</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledSlide>
    <section>
      <h2>Service Worker Prerequisites</h2>
      <List>
        <li>https</li>
        <li><code>manifest.json</code></li>
      </List>
    </section>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledSlide>
);
