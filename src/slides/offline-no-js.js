import React from 'react'
import styled from 'styled-components';
import { ContentSlide, Step } from 'react-presents'
import Notes from './templates/notes';

const scale = 2;

const Frame = styled.iframe`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  border: none;
  -ms-zoom: ${scale};
  -moz-transform: scale(${scale});
  -moz-transform-origin: 50% 0;
  -o-transform: scale(${scale});
  -o-transform-origin: 50% 0;
  -webkit-transform: scale(${scale});
  -webkit-transform-origin: 50% 0;
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>by Stuart Langridge aka @sil</li>
      <li>Not just JS - big image, html, etc</li>
    </ul>
  </Notes>
)

export default (props) => (
  <ContentSlide>
    <Frame src="http://kryogenix.org/code/browser/everyonehasjs.html"></Frame>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </ContentSlide>
);
