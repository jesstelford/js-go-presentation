import React from 'react'
import styled from 'styled-components';
import { ContentSlide, Step } from 'react-presents'
import Notes from './templates/notes';

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>...</li>
    </ul>
  </Notes>
)

export default (props) => (
  <ContentSlide>
    <h1>Shared World</h1>
    <ul>
      <li>"Everyone now sharing the same location / world data"</li>
    </ul>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </ContentSlide>
);
