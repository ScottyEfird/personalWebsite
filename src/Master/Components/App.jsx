/* eslint-disable react/prop-types */
import React, { Component } from "react";

import EXPERIENCE from "../Utils/Experience.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import ExperienceCard from "./ExperienceCard/ExperienceCard.jsx";
import CardModal from "./CardModal/CardModal.jsx";

import styles from "./app.module.scss";

class App extends Component {
  state = {
    modalStatus: undefined,
  };

  toggleModal = (brand) => {
    this.setState({
      modalStatus: brand,
    });
  };

  render() {
    const { modalStatus } = this.state;

    return (
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
              <ExperienceCard toggleModal={this.toggleModal} {...experience} />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
