import React from 'react'
import styled from 'styled-components';
import { ContentSlide, Step } from 'react-presents'
import TitleTemplate from './templates/title';
import Notes from './templates/notes';

const StyledTitleTemplate = styled(TitleTemplate)`
  background-image: url('./img/vr-arms-wide.png');
`;

const Highlighted = styled.span`
  color: #c02c02;

  &::before, &::after {
    content: ' ';
  }
`;

const TitleText = () => (
  <span>
    <span>
      How to build a
      <Highlighted>
        3D Location Aware Offline First Monster Catching MMOG with Shared World and Augmented Reality
      </Highlighted>
      in your browser today!
    </span>
  </span>
);

const SlideNotes = (props) => (
  <Notes {...props}>
    Fin.
  </Notes>
)

export default (props) => (
  <StyledTitleTemplate title={<TitleText />}>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledTitleTemplate>
);
