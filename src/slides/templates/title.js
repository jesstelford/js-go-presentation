import React from 'react'
import styled from 'styled-components';
import { ContentSlide } from 'react-presents'

const StyledContentSlide = styled(ContentSlide)`
  text-align: center;
  background-color: #dddfde;

  & > h1 {
    position: relative;
    top: 20vh;
    transform: translateY(-10vw);
    padding-right: inherit;
  }

  ${({styleOverrides}) => styleOverrides}
`;

export default (props) => (
  <StyledContentSlide className={props.className}>
    <h1>{props.title}</h1>
    {props.children}
  </StyledContentSlide>
);
