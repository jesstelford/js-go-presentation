import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Subtitle from './templates/subtitle';
import Notes from './templates/notes';

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Collect items from real-world locations</li>
      <li>Random == Boring / not shared</li>
      <li>Already know user's location</li>
      <li>What's nearby?</li>
    </ul>
  </Notes>
)

export default (props) => (
  <Subtitle>
    <h1>Item Drop Locations</h1>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Subtitle>
);
