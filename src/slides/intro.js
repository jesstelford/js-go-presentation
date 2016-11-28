import React from 'react'
import styled from 'styled-components';
import { ContentSlide, Step } from 'react-presents'
import TitleTemplate from './templates/title';
import Notes from './templates/notes';

const StyledTitleTemplate = styled(TitleTemplate)`
  background-image: url('./img/vr-arms-wide.png');
`;

const LargeText = styled.span`
  font-size: 13rem;
`

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
      <span>
        How to build a
        <Highlighted>
          3D Location Aware Offline First MMOG with Shared World and Augmented Reality
        </Highlighted>
        in your browser today!
      </span>
    </Step>
  </span>
);

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Not associated with Niantic. "Pokémon Go" is trademarked Nintendo / Niantic</li>
    </ul>
  </Notes>
)

export default (props) => (
  <StyledTitleTemplate title={<TitleText />}>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </StyledTitleTemplate>
);
