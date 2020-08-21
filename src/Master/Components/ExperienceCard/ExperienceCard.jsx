import React from "react";

import styles from "./experienceCard.module.scss";

const ExperienceCard = ({ logo, title, dateToFrom, url }) => (
  <div className={styles.cardWrapper}>
    <div className={styles.cardImageWrapper}>
      <a href={url} target="_blank" rel="noreferrer">
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
        <button>More info</button>
      </div>
    </div>
  </div>
);

export default ExperienceCard;
