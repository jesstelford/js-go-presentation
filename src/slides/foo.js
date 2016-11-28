import React from 'react'
import styled from 'styled-components';
import { ContentSlide, Step } from 'react-presents'
import TitleTemplate from './templates/title';
import Notes from './templates/notes';

const StyledTitleTemplate = styled(TitleTemplate)`
  background-color: rebeccapurple;
  color: white;
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Seriously!</li>
      <li>It's great!</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledTitleTemplate title={<span>JS Is Awesome!</span>}>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledTitleTemplate>
);
