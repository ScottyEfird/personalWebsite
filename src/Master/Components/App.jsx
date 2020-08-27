/* eslint-disable react/prop-types */
import React, { Component } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

import EXPERIENCE from "../Utils/Experience.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import ExperienceCard from "./ExperienceCard/ExperienceCard.jsx";
import CardModal from "./CardModal/CardModal.jsx";

import styles from "./app.module.scss";

class App extends Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  state = {
    modalStatus: undefined,
  };

  toggleModal = (brand) => {
    this.setState({
      modalStatus: brand,
    });
  };

  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x316b81,
      shininess: 78.0,
      waveHeight: 26.0,
      waveSpeed: 0.3,
      zoom: 0.95,
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }

  render() {
    const { modalStatus } = this.state;

    return (
      <>
        <div ref={this.vantaRef} className={styles.vanta} />
        <div className={styles.appBody}>
          <Header />
          <div className={styles.experienceCardsWrapper}>
            {EXPERIENCE.map((experience, index) => (
              <div className={styles.experienceCard} key={index}>
                <CardModal
                  modalStatus={modalStatus}
                  toggleModal={this.toggleModal}
                  {...experience}
                />
                <ExperienceCard
                  toggleModal={this.toggleModal}
                  {...experience}
                />
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
