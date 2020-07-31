import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '@src/components/app.jsx'

import('../image-converter/pkg')
  .then(m => m.greet());

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
	document.getElementById('app')
)
