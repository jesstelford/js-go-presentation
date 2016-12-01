import React from 'react'
import styled from 'styled-components';
import { ContentSlide, Step } from 'react-presents'
import TitleTemplate from './templates/title';
import Notes from './templates/notes';

const StyledTitleTemplate = styled(TitleTemplate)`
`;

const LargeText = styled.div`
  font-size: 13rem;
`

const NotesInfo = styled.code`
  font-size: 5rem;
  width: 100%;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;

const SuperText = styled.span`
  font-size: 5rem;
  vertical-align: top;
`

const Highlighted = styled.span`
  color: #c02c02;

  &::before, &::after {
    content: ' ';
  }
`;

const TitleText = () => (
  <span>
    <Step index={0} exact>
      <LargeText>Building Pokémon Go<SuperText>&trade;</SuperText> in <Highlighted>100% JS</Highlighted></LargeText>
    </Step>
    <Step index={1} exact>
      <div>
        How to build a
        <Highlighted>
          3D Location Aware Offline First Monster Catching MMOG with Shared World and Augmented Reality
        </Highlighted>
        in your browser today!
      </div>
    </Step>
  </span>
);

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>"Pokémon Go" is trademarked Niantic</li>
      <li>1998: Making games</li>
      <li>2009: AR game on DS</li>
      <li>Pokemon Go === cross section of tech</li>
      <li>Long title isn't as catchy</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledTitleTemplate title={<TitleText />}>
    <NotesInfo>Press 's' to see notes</NotesInfo>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledTitleTemplate>
);
