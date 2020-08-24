import React from "react";

import styles from "./footer.module.scss";

const Footer = () => (
  <div className={styles.footerWrapper}>
    {"View on "}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/ScottyEfird/personalWebsite"
    >
      GitHub
    </a>
  </div>
);

export default Footer;
