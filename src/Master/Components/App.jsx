/* eslint-disable react/prop-types */
import React from "react";

import EXPERIENCE from "../Utils/Experience.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import ExperienceCard from "./ExperienceCard/ExperienceCard.jsx";

import styles from "./app.module.scss";

const App = () => (
  <div className={styles.appBody}>
    <Header />
    <div className={styles.experienceCardsWrapper}>
      {EXPERIENCE.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </div>
    <Footer />
  </div>
);

export default App;
