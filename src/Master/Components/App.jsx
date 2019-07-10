/* eslint-disable react/prop-types */
import React from "react"
import { RiskSense, Coolfire, Frii } from '../Utils/Experience.jsx'
import { isButtonOpen, JobKeys } from '../Utils/utilities.jsx'
import './App.css'

const Header = ({ updateButton, buttons }) => (
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
      <div className={'Subtitle'} style={{ paddingTop: 15 }} >
        <span>
          <img
            src={`${window.location.origin}/images/icons/${isButtonOpen(buttons, JobKeys.GITHUB) ? 'arrow-down' : 'arrow-right'}.png`}
            height={20}
            onClick={() => updateButton(JobKeys.GITHUB)}
            alt={'Github button'} />
          Github
        </span>
        {
          isButtonOpen(buttons, JobKeys.GITHUB) && (
            <React.Fragment>
              stuff
            </React.Fragment>
          )
        }
      </div>
    </div>
  </div>
)

const ExperianceRow = ({ experianceData }) => (
  <React.Fragment>
    <hr />
    {experianceData.map(row => (
      <div className='ExperianceRow' key={row}>{`- ${row}`}</div>
    ))}
  </React.Fragment>
)

const ExperienceContent = ({ job, updateButton, buttons }) => (
  <div className={'Dummy'}>
    <div className={'ExperienceContentWrapper'}>
      <div className={'button'}>
        <img
          src={`${window.location.origin}/images/icons/${isButtonOpen(buttons, job.key) ? 'arrow-down' : 'arrow-right'}.png`}
          height={60}
          onClick={() => updateButton(job.key)}
          alt={job.title} />
      </div>
      <div className={'ExperienceWrapper'}>
        <a href={job.url} target='_blank' rel='noopener noreferrer' className={'ExperienceHeader'}>
          <img src={`${window.location.origin}/images/${job.logo}`} height={100} alt={job.title} />
        </a>
        <div className={'ExperienceBody'}>
          <span>{job.jobTitle}</span>
          <span>{job.dateToFrom}</span>
        </div>
        {isButtonOpen(buttons, job.key) && <ExperianceRow experianceData={job.experianceData} />}
      </div>
    </div>
  </div>
)


class AppBody extends React.Component {
  constructor(props) {
    super(props)
    this.updateButton = this.updateButton.bind(this)
    this.state = {
      buttons: [
        { key: JobKeys.RISKSENSE, isOpen: false },
        { key: JobKeys.COOLFIRE, isOpen: false },
        { key: JobKeys.FRII, isOpen: false },
        { key: JobKeys.GITHUB, isOpen: false }
      ]
    }
  }


  updateButton(key) {
    this.setState(prevState => ({
      buttons: prevState.buttons.map(
        button => key === button.key ? { ...button, isOpen: !prevState.buttons.find(x => x.key === key).isOpen } : button
      )
    }))
  }

  render() {
    return (
      <div className='AppBody'>
        <Header updateButton={this.updateButton} buttons={this.state.buttons} />
        <ExperienceContent job={RiskSense} updateButton={this.updateButton} buttons={this.state.buttons} />
        <ExperienceContent job={Coolfire} updateButton={this.updateButton} buttons={this.state.buttons} />
        <ExperienceContent job={Frii} updateButton={this.updateButton} buttons={this.state.buttons} />
      </div>
    )
  }
}

export default AppBody
