import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '@src/components/app.jsx'


async function main() {
  window.image_converter = await import('../bin/image-converter/pkg')
  
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, 
    document.getElementById('app')
  )
}

main()