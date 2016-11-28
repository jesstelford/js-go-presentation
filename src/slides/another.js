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
    They tesselate so nicely. Check it out: <a href="http://hexb.in/sticker.html">hexb.in/sticker.html</a>
  </Notes>
)

export default (props) => (
  <StyledTitleTemplate title={<span>Hexagonal stickers FTW</span>}>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledTitleTemplate>
);
