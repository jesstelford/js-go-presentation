import React from 'react'
import styled from 'styled-components';
import { ContentSlide } from 'react-presents'

const StyledContentSlide = styled(ContentSlide)`
  text-align: center;
  background-color: #dddfde;

  h1 {
    padding-right: inherit;
  }
`;

export default (props) => (
  <StyledContentSlide>
    <h1>{props.title}</h1>
  </StyledContentSlide>
);
