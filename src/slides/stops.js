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
    Item Caches

    <ul>
      <li>"While moving around in the world, want to see real-world locations show up"</li>
      <li>"Kind of boring if it's just random, and also not realistic; only 10 caches in a city, but 15 on a farm!?"</li>
      <li>"We need a crowd-sourced dataset of locations"</li>
      <li>"Foursquare!"</li>
      <li>"They have excellent APIs, with generous rate limits"</li>
      <li>Screenshot of Foursquare API docs page</li>
      <li>"To get the data; <code>fetch()</code> (modern alternative to AJAX)"</li>
      <li>Small code example</li>
      <li>"Grabbing new data every time player moves is bad"</li>
      <li>"Split the world into regions; decimal rounding on lat/long"</li>
      <li>"Search nearest X overlappig regions"</li>
      <li>Show diagram</li>
      <li>"This strategy can be used for caching any location data locally"</li>
      <li>"What do we do with the data?"</li>
      <li>"Drop a pin!"</li>
      <li>Image of a pin</li>
      <li>Demo POI on map</li>
      <li><code>(show basics)</code></li>
      <li>"Coupled with <code>navigator.geolocation</code>; get real-time locations nearby"</li>
    </ul>

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </ContentSlide>
);
