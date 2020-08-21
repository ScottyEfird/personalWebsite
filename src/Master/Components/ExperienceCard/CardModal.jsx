import React from "react";
import PropTypes from "prop-types";

import styles from "./experienceCard.module.scss";

const CardModal = ({ isModalOpen, toggleModal }) => {
  if (!isModalOpen) {
    return null;
  }
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent}>
        todo
        <button onClick={() => toggleModal()}>Close</button>
      </div>
    </div>
  );
};

export default CardModal;

CardModal.propTypes = {
  isModalOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
};
