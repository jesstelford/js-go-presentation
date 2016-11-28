import React from 'react'
import styled from 'styled-components';
import { ContentSlide, Step } from 'react-presents'
import Notes from './templates/notes';

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>...</li>
    </ul>
  </Notes>
)

export default (props) => (
  <ContentSlide>
    <h1>Augmented Reality</h1>
    <ul>
      <li>"The VR demo earlier was cool, but it's not interactive with the environment"</li>
      <li>"Augmented Reality puts 3D items in the world around you"</li>
      <li>Screenshot of an AR demo</li>
      <li>"A few parts to this:"</li>
      <li>"Getting a video stream"</li>
      <li>"Rendering video in 3D space"</li>
      <li>"Placing objects in 3D space"</li>
      <li>"Video Stream"</li>
      <li><code>navigator.mediaDevices.getUserMedia()
        .then(stream => videoEl.srcObject = stream)</code></li>
      <li>"Gives a stream of audio and/or video"</li>
      <li>"Asks for permission from user"</li>
      <li>"Has some quirks; Have to make a request to confirm permission, then can list devices, then can request one of those devices (eg; to always select the rear facing camera)"</li>
      <li>"Once we have the <code><video /></code> playing, can place it in 3D with aframe"</li>
      <li>Demo a basic video in aframe</li>
      <li><code><a-plane src="#videoEl" /></code></li>
      <li>"Need to line up the 3D &amp; real world"</li>
      <li>"Lock the video plane to the camera"</li>
      <li>Screenshot of inspector showing locked video plane</li>
      <li>Demo of 3D objects infront of video</li>
      <li>"Now we can do AR"</li>
      <li>Re-demo the "Catching" scene without AR</li>
      <li>Turn AR on - blow their minds</li>
      <li>"Sir, I don't mean to alarm you, but there's a monster on your head!"</li>
      <li>"Stay still, and I'll catch that for you!"</li>
      <li>Get to the "Caught" screen</li>
    </ul>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </ContentSlide>
);
