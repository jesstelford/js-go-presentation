import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Subtitle from './templates/subtitle';
import Notes from './templates/notes';

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Make it interactive</li>
      <li><i>Demo: click + drag</i></li>
    </ul>
  </Notes>
)

export default (props) => (
  <Subtitle>
    <h1>Catching Monsters</h1>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Subtitle>
);
