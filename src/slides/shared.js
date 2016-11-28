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
    <h1>Shared World</h1>
    <ul>
      <li>"Real-world places, but we want to share"</li>
      <li>"Let's move to the server; node.js"</li>
      <li><code>const express = require('express')()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)</code></li>
      <li>"Need to be able to search over locations; Geospatial searching"</li>
      <li><code>npm install mongodb</code></li>
      <li>MongoDB logo</li>
      <li><code>... A MDB query ...</code></li>
      <li>"Use GeoJSON format to store data"</li>
      <li><code>... Some GeoJSON ...</code></li>
      <li><code>https://www.npmjs.com/package/mongodb#find-all-documents</code></li>
      <li>"The MongoDB database can be deployed to your favourite cloud host, with scaling, but that's a big topic of it's own, and outside the scope of this talk"</li>
      <li>"Node server can be deployed to now.sh"</li>
      <li>"Everyone now sharing the same location / world data"</li>
    </ul>

* Node.js
* MongoDB - with GeoSpatial indexes: https://docs.mongodb.com/v3.2/applications/geospatial-indexes/
* Scalable servers (now.sh)
* Store Pokestops & Gyms in the cloud
    </ul>
    {props.showNotes ? <SlideNotes {...props} /> : ''}
  </ContentSlide>
);
