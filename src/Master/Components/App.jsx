/* eslint-disable react/prop-types */
import React from "react";

import EXPERIENCE from "../Utils/Experience.jsx";
import Header from "./Header/Header.jsx";
import styles from "./app.module.scss";

const App = () => (
  <div className={styles.appBody}>
    <Header />
    {EXPERIENCE.forEach((experience) => {
      return <div>dogs</div>;
    })}
  </div>
);

export default App;
