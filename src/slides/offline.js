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
    <h1>Offline</h1>
    <ul>
      <li>"Great, except it's all online. Mobile devices often go offline."</li>
      <li>"Progressive Web Apps aim to support being offline"</li>
      <li>"Browsers support offline with ServiceWorkers"</li>
      <li>"Can hook directly into all requests"</li>
      <li>"ServiceWorkers are tricky / complex"</li>
      <li><code>npm install sw-precache sw-toolbox</code></li>
      <li>"sw-precache sets up rules for caching known static assets (images, js bundles,e tc)</li>
      <li>"sw-toolbox supports caching API calls, etc"</li>
      <li>"Pick a caching strategy, such as Cache-First, or Network-Then-Cache"</li>
      <li>"For location lists: Cache-First - they don't change often. Stale data is perfectly fine."</li>
      <li>"For monsters nearby: Network-Then-Cache - they change often. Stale data is undesirable, but ok"</li>
      <li>"Two requirements for going Offline:"</li>
      <li>"manifest.json" to describe your app, and what the "entry point" is"</li>
      <li>"httpS - comes free with now.sh and any decent hosting provider thanks to letsencrypt team"</li>
    </ul>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </ContentSlide>
);
