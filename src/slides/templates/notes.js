import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  border-top: 1px solid #333;
  padding: 2rem;
  padding-right: calc(40vw + 2rem);
  width: 100%;
  height: 41vh;
  overflow-y: auto;

  & > ul {
    margin: 0;
  }
`;

const StyledPreview = styled.iframe`
  position: absolute;
  right: 0;
  top: 0;
  width: 40vw;
  height: 40vh;
  border: none;
`;

function buildPath(presentation, slideIndex, stepIndex) {
  const iframeUrl = new URL(window.location.href);
  iframeUrl.hash = `#${presentation._createPath({slideIndex, stepIndex})}`;
  iframeUrl.search = ''; // Kill off the `?notes=` param
  return iframeUrl.toString();
}

export default ({children, slideIndex, stepIndex, presentation}) => {

  let preview = false;

  const totalSteps = presentation._getNumStepsForSlide(slideIndex);

  let nextStepIndex = stepIndex + 1;
  let nextSlideIndex = slideIndex;
  if (nextStepIndex >= totalSteps) {
    nextSlideIndex += 1;
    nextStepIndex = 0;
  }

  preview = <StyledPreview src={buildPath(presentation, nextSlideIndex, nextStepIndex)} />;

  return (
    <Container>
      {[...React.Children.toArray(children), preview]}
    </Container>
  );
}
