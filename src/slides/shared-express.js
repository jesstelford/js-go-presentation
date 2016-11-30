import React from 'react'
import styled from 'styled-components';
import { Code, Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledCode = styled(Code)`
  text-align: left;

  .cm-s-reactpresents.CodeMirror {
    font-size: 4.3rem;
  }

  .cm-s-reactpresents {
    .CodeMirror-gutters {
      font-size: 4.3rem;
    }
  }
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Hello World of Express</li>
      <li>Problem: Performance (we do all fetches)</li>
      <li>Solution: caching</li>
      <li>Must support Geo data</li>
    </ul>
  </Notes>
)

export default (props) => (
  <Slide>
    <StyledCode value={`
const express = require('express')()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)
    `.trim()} />

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
