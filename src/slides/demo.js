import React from 'react'
import { ContentSlide, Step } from 'react-presents'

export default () => (
  <ContentSlide>
    <h1>A simple slide</h1>
    <p>Slides can contain multiple steps.</p>
    <ul>
      <Step index={1} exact><li>Sub-text can appear only for a specific step</li></Step>
      <Step index={2}><li>Or it can be additive</li></Step>
      <Step index={3}><li>(By default it is additive)</li></Step>
      <Step index={4} maxIndex={5}><li>They can also be shown for a range</li></Step>
    </ul>
  </ContentSlide>
);
