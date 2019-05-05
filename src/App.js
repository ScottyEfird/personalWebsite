import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import './App.css'

function Index() {
  let photos = []
  for (let i = 0; i <= 4; i++) {
    photos.push(
      <Link to={`/photos/${i}`} key={i} className='FlexItem' target='_blank' >
        <img src={`./thumbnails/${i}_tn.jpg`} height={300} width={300} alt={''} />
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
  console.log(id.id)
  return (
    <div className='App'>
      <img src={`../images/${id.id}.jpg`} alt={''} />
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