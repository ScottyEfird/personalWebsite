/* eslint-disable react/prop-types */
import React from "react";

import Header from "./Header/Header.jsx";
import styles from "./app.module.scss";

const App = () => (
  <div className={styles.appBody}>
    <Header />
  </div>
);

export default App;
