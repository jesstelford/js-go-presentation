import React from 'react'
import styled from 'styled-components';
import { Step } from 'react-presents'
import Code from './templates/code';
import Notes from './templates/notes';
import Slide from './templates/slide';

const StyledCode = styled(Code)`
  text-align: left;

  .cm-s-reactpresents.CodeMirror {
    font-size: 3.5rem;
  }

  .cm-s-reactpresents {
    .CodeMirror-gutters {
      font-size: 3.5rem;
    }
  }
`;

const SlideNotes = (props) => (
  <Notes {...props}>
    <ul>
      <li>Registered SW listens to events (installed, etc)</li>
      <li>Good time to show "Ready for offline use"</li>
      <li><code>install</code> is like app install</li>
      <li><code>fetch</code> is hijacking fetch requests!</li>
      <li>&raquo; Powerful patterns.</li>
    </ul>
  </Notes>
)


const code = `
// index.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registeredWorker => { /* ... */ });
}

// sw.js
this.addEventListener('install', event => {
  event.waitUntil(saveAllTheThings());
});
this.addEventListener('fetch', event => {
  event.respondWith(getCachedData());
});
  `.trim();

export default (props) => (
  <Slide>
    <Step index={0} exact>
      <StyledCode value={code} />
    </Step>
    <Step index={1} exact>
      <StyledCode dimLines={[[5, 12]]} value={code} />
    </Step>
    <Step index={2} exact>
      <StyledCode dimLines={[[0, 5]]} value={code} />
    </Step>

    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </Slide>
);
