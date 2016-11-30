import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Subtitle from './templates/subtitle';
import Notes from './templates/notes';

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>The "MMO" part</li>
      <li>Sharing Monsters &amp; Item Locations</li>
      <li>Node.js on the server!</li>
    </ul>
  </Notes>
)

export default (props) => (
  <Subtitle>
    <h1>Shared World</h1>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Subtitle>
);
