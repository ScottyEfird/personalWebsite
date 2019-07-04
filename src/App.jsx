/* eslint-disable react/prop-types */
import React from "react"
import { RiskSense } from './Experience.jsx'
import './App.css'

const Header = () => (
  <div className={'Dummy'}>
    <div className={'ElementWrapper'}>
      <div className={'Title'}>
          Scotty Efird
      </div>
      <hr />
      <div className={'Subtitle'}>
        <span>Scottyefird@gmail.com</span>
        <span>(910) 603-6186</span>
        <span>Albuquerque, NM</span>
      </div>
    </div>
  </div>
)

const ExperienceContent = ({ job, updateButton, buttons }) => (
  <div className={'Dummy'}>
    <div className={'ExperienceWrapper'}>
      <a href={job.url} target='_blank' rel='noopener noreferrer' className={'ExperienceHeader'}>
        <img src={`${window.location.origin}/images/risksense.png`} height={100} alt={job.title} />
      </a>
      <div className={'ExperienceBody'}>
        <span>{job.jobTitle}</span>
        <span>{job.dateToFrom}</span>
      </div>
      <div style={{width: 100, height: 100, background: 'blue'}} onClick={() => updateButton(job.title)} />
      {buttons.find(x => x.title === job.title).isOpen && (
        <div>
          hello!!
        </div>
      )
      }
    </div>
  </div>
)

class AppBody extends React.Component {
  constructor(props) {
    super(props)
    this.updateButton = this.updateButton.bind(this)
    this.state = {
      // Title is used as the button id.
      buttons: [
        { title: 'RiskSense', isOpen: false }
      ]
    }
  }

  //https://codeburst.io/animating-react-components-with-css-and-styled-components-cc5a0585f105

  updateButton (title) {
    this.setState(prevState => ({
      buttons: prevState.buttons.map(
        button => title === button.title ? { ...button, isOpen: !prevState.buttons.find(x => x.title === title).isOpen } : button
      )
    }))
  }

  render() {
    return (
      <div className='AppBody'>
        <Header style={{paddingTop: 15}} />
        <ExperienceContent job={RiskSense} updateButton={this.updateButton} buttons={this.state.buttons} />
      </div>
    )
  }
}

export default AppBody
