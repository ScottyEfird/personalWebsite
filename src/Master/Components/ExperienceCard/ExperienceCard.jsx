import React from "react";
import PropTypes from "prop-types";

import styles from "./experienceCard.module.scss";

const ExperienceCard = ({ toggleModal, brand, title, dateToFrom }) => (
  <div className={styles.cardWrapper} onClick={() => toggleModal(brand)}>
    <div className={styles.cardImageWrapper}>
      <img
        src={`${window.location.origin}/images/${brand}.png`}
        alt={`Logo for ${title}`}
      />
    </div>
    <div className={styles.cardContent}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardDate}>{dateToFrom}</div>
    </div>
  </div>
);

export default ExperienceCard;

ExperienceCard.propTypes = {
  toggleModal: PropTypes.func,
  title: PropTypes.string,
  jobTitle: PropTypes.string,
  location: PropTypes.string,
  dateToFrom: PropTypes.string,
  brand: PropTypes.string,
  url: PropTypes.string,
  experienceData: PropTypes.string,
};
