import React from 'react'
import './App.css'

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react'

import cloudinary from 'cloudinary-core'

// const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'demo'})
const SampleImg = () => (
  <img src='https://res.cloudinary.com/demo/image/upload/sample.jpg' />
)

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      dogs
        {SampleImg}
      </header>
    </div>
  )
}

export default App
