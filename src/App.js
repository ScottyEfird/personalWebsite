import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import './App.css'

const TOTAL_PHOTOS = 75

function Index() {
  let photos = []
  for (let i = 1; i <= TOTAL_PHOTOS; i++) {
    photos.push(
      <Link to={`/photos/${i}`} key={i} className='FlexItem' >
        <img src={`./images/thumbnails/tako${i}_tn.jpg`} height={300} width={300} alt={''} />
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
      <img src={`${window.location.origin}/images/photos/tako${id.id}.jpg`} alt={''} className='MaxWidth' />
    </div>
  )
}

const getRandomNumber = () => Math.floor(Math.random() * (TOTAL_PHOTOS - 1 + 1)) + 1

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      urlNumber: getRandomNumber()
    }
  }

  handleClick () {
    this.setState({
      urlNumber: getRandomNumber()
    })
  }

  render () {
    return (
      <div className='App' onClick={() => this.handleClick()} >
        <img
          src={`${window.location.origin}/images/photos/tako${this.state.urlNumber}.jpg`}
          alt={''}
          className='MaxWidth'
        />
      </div>
    )
  }
}

function AppRouter() {
  return (
    <Router>
      <div className='App'>
        <Route path='/' exact component={Photo} />
        <Route path='/photos' component={Photo} />
        <Route path='/photos/:id' component={Photos} />
      </div>
    </Router>
  )
}

export default AppRouter
