import React from 'react'
import styled from 'styled-components';
import { ContentSlide } from 'react-presents'
import TitleTemplate from './templates/title';

const StyledContentSlide = styled(ContentSlide)`
  background-color: #dddfde;
`;

const Highlighted = styled.span`
  color: #c02c02;

  &::before, &::after {
    content: ' ';
  }
`;

const TitleText = () => (
  <span>
    How to build a
    <Highlighted>
      3D Location Aware MMOG with Social Interactions and Augmented Reality
    </Highlighted>
    in your browser today!
  </span>
);

export default () => (
  <TitleTemplate title={<TitleText />}>
  </TitleTemplate>
);
