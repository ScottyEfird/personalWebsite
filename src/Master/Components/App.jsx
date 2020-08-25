/* eslint-disable react/prop-types */
import React, { Component } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

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
    this.vantaEffect = FOG({
      el: this.vantaRef.current,
      THREE: THREE,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0xa0c18,
      midtoneColor: 0xc0824,
      lowlightColor: 0x45bef,
      baseColor: 0x4260b8,
      blurFactor: 0.61,
      speed: 1.4,
      zoom: 1.6,
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
              <div key={index}>
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
