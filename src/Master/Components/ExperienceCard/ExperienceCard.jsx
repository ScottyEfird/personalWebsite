import React from "react";
import PropTypes from "prop-types";

import styles from "./experienceCard.module.scss";
import globalStyles from "../global.module.scss";

const ExperienceCard = ({ toggleModal, brand, title, dateToFrom, url }) => (
  <div className={styles.cardWrapper}>
    <div className={styles.cardImageWrapper}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={`${window.location.origin}/images/${brand}.png`}
          height={150}
          alt={`Logo for ${title}`}
        />
      </a>
    </div>
    <div className={styles.cardContent}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardDate}>{dateToFrom}</div>
      <button
        className={globalStyles.button}
        onClick={() => toggleModal(brand)}
      >
        More info
      </button>
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
  experienceData: PropTypes.arrayOf(PropTypes.string),
};
