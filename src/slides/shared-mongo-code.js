import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Code from './templates/code';
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledCode = styled(Code)`
  text-align: left;

  .cm-s-reactpresents.CodeMirror {
    font-size: 3rem;
  }

  .cm-s-reactpresents {
    .CodeMirror-gutters {
      font-size: 3rem;
    }
  }
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Search types: Proximity | Bounding box | Polygon</li>
      <li>&raquo; Great to share online, but...</li>
    </ul>
  </Notes>
)

export default (props) => (
  <Slide>
    <StyledCode value={`
db.collection('monsters').find({
  location: {
    nearSphere: {
      geometry: {
        type: "Point",
        coordinates: [ lat, long ],
      },
      maxDistance: 5000
    }
  }
})
    `.trim()} />

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
