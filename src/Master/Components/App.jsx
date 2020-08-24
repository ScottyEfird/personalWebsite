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
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    const { isModalOpen } = this.state;

    // https://www.digitalocean.com/community/tutorials/react-modal-component

    return (
      <div className={styles.appBody}>
        <Header />
        <CardModal isModalOpen={isModalOpen} toggleModal={this.toggleModal} />
        <div className={styles.experienceCardsWrapper}>
          {EXPERIENCE.map((experience, index) => (
            <ExperienceCard
              key={index}
              toggleModal={this.toggleModal}
              {...experience}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
