import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Notes from './templates/notes';
import Slide from './templates/slide';

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Static vs Dynamic</li>
      <li>Items: Cache-first | Monsters: Network->cache</li>
    </ul>
  </Notes>
)

export default (props) => (
  <Slide>
    <section>
      <h2><code>npm install sw-precache</code></h2>
      <h2><code>npm install sw-toolbox&nbsp;</code></h2>
    </section>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
