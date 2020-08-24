import React from "react";
import PropTypes from "prop-types";

import styles from "./experienceCard.module.scss";

const ExperienceCard = ({ toggleModal, logo, title, dateToFrom, url }) => (
  <div className={styles.cardWrapper}>
    <div className={styles.cardImageWrapper}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={`${window.location.origin}/images/${logo}`}
          height={150}
          alt={`Logo for ${title}`}
        />
      </a>
    </div>
    <div className={styles.cardContent}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardDate}>{dateToFrom}</div>
      <div className={styles.cardButton}>
        <button onClick={() => toggleModal()}>More info</button>
      </div>
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
  logo: PropTypes.string,
  url: PropTypes.string,
  experienceData: PropTypes.arrayOf(PropTypes.string),
};
