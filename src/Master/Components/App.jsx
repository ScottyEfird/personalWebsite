/* eslint-disable react/prop-types */
import React from "react";
import { RiskSense, Coolfire, Frii } from "../Utils/Experience.jsx";
import { isButtonOpen, JobKeys } from "../Utils/utilities.jsx";
import "./App.css";

const Header = ({ updateButton, buttons }) => (
  <div className="ElementWrapper">
    <div className="Title">Scotty Efird</div>
    <div className="Subtile">Front End Software Engineer</div>
    <hr className="hr" />
    <div className="ContactInfo">
      <span>
        <span role="img" aria-label="email">
          📧
        </span>{" "}
        Scottyefird@gmail.com
      </span>
      <span>
        <span role="img" aria-label="phone">
          📱&nbsp;
        </span>{" "}
        (910) 603-6186
      </span>
      <span>
        <span role="img" aria-label="pin">
          📌
        </span>
        Albuquerque, NM
      </span>
      <span>
        <span role="img" aria-label="hat">
          🎓
        </span>{" "}
        BS Computer Science - University of Wyoming
      </span>
    </div>
    <div className="ContactInfo" style={{ paddingTop: 15 }}>
      <div>
        Check out my
        <a
          className="Link"
          href="https://github.com/ScottyEfird/personalWebsite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i> Github </i>
        </a>
      </div>
    </div>
  </div>
);

const ExperianceRow = ({ experianceData }) => (
  <React.Fragment>
    <hr className="hr" />
    {experianceData.map((row) => (
      <div className="ExperianceRow" key={row}>{`- ${row}`}</div>
    ))}
  </React.Fragment>
);

const ExperienceContent = ({ job, updateButton, buttons }) => (
  <div className="ExperienceContentWrapper">
    <div className="Button">
      <img
        src={`${window.location.origin}/images/icons/${
          isButtonOpen(buttons, job.key) ? "arrow-down" : "arrow-right"
        }.png`}
        height={60}
        onClick={() => updateButton(job.key)}
        alt={job.title}
      />
    </div>
    <div className="ExperienceWrapper">
      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        className="ExperienceHeader"
      >
        <img
          src={`${window.location.origin}/images/${job.logo}`}
          height={100}
          alt={job.title}
        />
      </a>
      <div className="ExperienceBody">
        <span className="Subtile">{job.jobTitle}</span>
        <span>{job.dateToFrom}</span>
      </div>
      {isButtonOpen(buttons, job.key) && (
        <ExperianceRow experianceData={job.experianceData} />
      )}
    </div>
  </div>
);

const SkillBox = () => (
  <div className="Skillbox">
    <div>Skills, Preferences and Tools</div>
    <ul>
      <li>VSCode with ESLint and Chrome using React DevTools</li>
      <li>Unit testing with Jest, Mocha and Flow</li>
      <li>Agile working enviroment</li>
      <li>Eagle Scout - Boy Scouts of America</li>
      <li>
        Grab a copy of my resume{" "}
        <a
          className="Link"
          href={`${window.location.origin}/downloads/ScottyEfirdResume.pdf`}
          download
        >
          here
        </a>
      </li>
    </ul>
  </div>
);

class AppBody extends React.Component {
  constructor(props) {
    super(props);
    this.updateButton = this.updateButton.bind(this);
    this.state = {
      buttons: [
        { key: JobKeys.RISKSENSE, isOpen: false },
        { key: JobKeys.COOLFIRE, isOpen: false },
        { key: JobKeys.FRII, isOpen: false },
        { key: JobKeys.GITHUB, isOpen: false },
      ],
    };
  }

  updateButton(key) {
    this.setState((prevState) => ({
      buttons: prevState.buttons.map((button) =>
        key === button.key
          ? {
              ...button,
              isOpen: !prevState.buttons.find((x) => x.key === key).isOpen,
            }
          : button
      ),
    }));
  }

  render() {
    return (
      <div className="AppBody">
        <div>
          <Header
            updateButton={this.updateButton}
            buttons={this.state.buttons}
          />
          <hr className="hr" />
          <ExperienceContent
            job={RiskSense}
            updateButton={this.updateButton}
            buttons={this.state.buttons}
          />
          <ExperienceContent
            job={Coolfire}
            updateButton={this.updateButton}
            buttons={this.state.buttons}
          />
          <ExperienceContent
            job={Frii}
            updateButton={this.updateButton}
            buttons={this.state.buttons}
          />
          <hr className="hr" />
          <SkillBox />
        </div>
      </div>
    );
  }
}

export default AppBody;
