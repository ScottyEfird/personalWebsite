import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import './App.css'

function Index() {
  let photos = []
  for (let i = 1; i <= 75; i++) {
    photos.push(
      <Link to={`/photos/${i}`} key={i} className='FlexItem' >
        <img src={`./images/thumbnails/tako (${i})_tn.jpg`} height={300} width={300} alt={''} />
      </Link>
    )
  }
  return (

    <div className='FlexBody'>
      {photos}
    </div>
  )
}

function Photos({ match }) {
  const { params: id } = match
  return (
    <div className='App'>
      <img src={`${window.location.origin}/images/photos/tako (${id.id}).jpg`} alt={''} />
    </div>
  )
}

function AppRouter() {
  return (
    <Router>
      <div className='App'>
        <Route path='/' exact component={Index} />
        <Route path='/photos/:id' component={Photos} />
      </div>
    </Router>
  )
}

export default AppRouter