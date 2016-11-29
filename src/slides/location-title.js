import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Subtitle from './templates/subtitle';
import Notes from './templates/notes';

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Maps apps like Google / Apple are obv.</li>
      <li>OpenStreetMap too! FOSS <i>data only</i>.</li>

      <li>"How can I render that data in my game?"</li>
      <li>"First, how do we even render a map?"</li>
      <li>"Needs a <i>slippy map</i> UI (ie; the map that <i>slips</i> around under your finger</li>
      <li>"Leaflet is popular. So is Mapbox-GL"</li>
      <li>Demo Mapbox-GL in the browser (centered &amp; zoomed on Australia)</li>
      <li>"Nothing too revolutionary"</li>
      <li>"Ok, let's zoom in on our current location"</li>

      <li><h2><code>navigator.geolocation</code></h2></li>
      <li><pre><code>{`
navigator.geolocation.watchPosition(position => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
});
      `.trim()}</code></pre></li>
      <li>"Will ask for permission"</li>
      <li>"Gives latitude + longitude - just what we need to center the map"</li>
      <li>Demo a centered mapbox map</li>
      <li>Show relevant lines of code</li>
      <li>"But how do we get that into the game?"</li>
      <li>Demo map in 3D</li>
      <li><code><a-map /></code></li>
      <li>"As few lines of code as the 2D example!"</li>
    </ul>
  </Notes>
)

export default (props) => (
  <Subtitle>
    <h1>Location Aaware</h1>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Subtitle>
);
