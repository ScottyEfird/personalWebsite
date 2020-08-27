import React from "react";
import PropTypes from "prop-types";

import styles from "./cardModal.module.scss";

const CardModal = ({
  title,
  modalStatus,
  toggleModal,
  url,
  brand,
  experience,
  jobTitle,
  project,
  contentImage,
}) => {
  if (!modalStatus || modalStatus !== brand) {
    return null;
  }

  return (
    <div className={styles.pageWrapper} onClick={() => toggleModal()}>
      <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalTop}>
          <div className={styles.title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
            {` - ${jobTitle}`}
          </div>
          <div className={styles.closeModal} onClick={() => toggleModal()}>
            X
          </div>
        </div>
        <div className={styles.modalMiddle}>
          <img
            className={styles.modalImage}
            src={`${window.location.origin}/images/content/${contentImage}`}
            alt="Project that I've worked on"
          />
        </div>
        <div className={styles.modalBottom}>
          <div className={styles.subtitle}>{project}</div>
          <div>{experience}</div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;

CardModal.propTypes = {
  modalStatus: PropTypes.string,
  toggleModal: PropTypes.func,
  title: PropTypes.string,
  jobTitle: PropTypes.string,
  location: PropTypes.string,
  dateToFrom: PropTypes.string,
  brand: PropTypes.string,
  contentImage: PropTypes.string,
  project: PropTypes.string,
  url: PropTypes.string,
  experience: PropTypes.string,
};
