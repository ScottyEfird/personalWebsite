import React from "react";
import PropTypes from "prop-types";

import styles from "./cardModal.module.scss";

const CardModal = ({ modalStatus, toggleModal, brand, experience }) => {
  if (!modalStatus || modalStatus !== brand) {
    return null;
  }
  return (
    <div className={styles.pageWrapper} onClick={() => toggleModal()}>
      <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeModal} onClick={() => toggleModal()}>
          X
        </div>
        <div className={styles.modalTop}>
          <img
            src={`${window.location.origin}/images/content/${brand}.png`}
            alt="Project that I've worked on"
          />
        </div>
        <div className={styles.modalBottom}>
          <p>{experience}</p>
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
  url: PropTypes.string,
  experience: PropTypes.string,
};
