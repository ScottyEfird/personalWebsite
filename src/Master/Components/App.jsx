/* eslint-disable react/prop-types */
import React from "react"
import { RiskSense, Coolfire, Frii } from '../Utils/Experience.jsx'
import { isButtonOpen, JobKeys } from '../Utils/utilities.jsx'
import './App.css'

const Header = ({ updateButton, buttons }) => (
  <div className='Dummy'>
    <div className='ElementWrapper'>
      <div className='Title'>
        Scotty Efird
      </div>
      <div className='Subtile'>
        Frontend Software Engineer
      </div>
      <hr />
      <div className='ContactInfo'>
        <span>Scottyefird@gmail.com</span>
        <span>(910) 603-6186</span>
        <span>Albuquerque, NM</span>
      </div>
      <div className='ContactInfo' style={{ paddingTop: 15 }} >
        <div>
          Fork this website <a href="https://github.com/ScottyEfird/personalWebsite"><i>here</i></a> or check out another cool <a href="https://github.com/ScottyEfird/Notes"><i>project</i></a>        </div>
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
  <div className='Dummy'>
    <div className='ExperienceContentWrapper'>
      <div className='button'>
        <img
          src={`${window.location.origin}/images/icons/${isButtonOpen(buttons, job.key) ? 'arrow-down' : 'arrow-right'}.png`}
          height={60}
          onClick={() => updateButton(job.key)}
          alt={job.title} />
      </div>
      <div className='ExperienceWrapper'>
        <a href={job.url} target='_blank' rel='noopener noreferrer' className='ExperienceHeader'>
          <img src={`${window.location.origin}/images/${job.logo}`} height={100} alt={job.title} />
        </a>
        <div className='ExperienceBody'>
          <span>{job.jobTitle}</span>
          <span>{job.dateToFrom}</span>
        </div>
        {isButtonOpen(buttons, job.key) && <ExperianceRow experianceData={job.experianceData} />}
      </div>
    </div>
  </div>
)

const SkillBox = () => (
  <div className='Skillbox'>
    <div>
      Skills, Preferences and Tools
    </div>
    <ul>
      <li>Bachelors in Science, Computer Science from the University of Wyoming</li>
      <li>VSCode as my editor of choice with ESLint, React DevTools and Chrome DevTools</li>
      <li>Unit testing using Jest and Mocha and run time type checking using Flow</li>
      <li>Agile or Kanban developer working enviroment</li>
      <li>The rank of Eagle Scout - Boy Scouts of America</li>
    </ul>
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
        <div className='AppWrapper'>
          <Header updateButton={this.updateButton} buttons={this.state.buttons} />
          <hr />
          <ExperienceContent job={RiskSense} updateButton={this.updateButton} buttons={this.state.buttons} />
          <ExperienceContent job={Coolfire} updateButton={this.updateButton} buttons={this.state.buttons} />
          <ExperienceContent job={Frii} updateButton={this.updateButton} buttons={this.state.buttons} />
          <hr />
          <SkillBox />
        </div>
      </div>
    )
  }
}

export default AppBody
