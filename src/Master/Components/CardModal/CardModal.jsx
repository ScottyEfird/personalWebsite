import React from "react";
import PropTypes from "prop-types";

import styles from "./cardModal.module.scss";

const CardModal = ({ isModalOpen, toggleModal }) => {
  if (!isModalOpen) {
    return null;
  }
  return (
    <div className={styles.pageWrapper} onClick={() => toggleModal()}>
      <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>content content content</div>
        <div className={styles.modalContent}>content content content</div>
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
