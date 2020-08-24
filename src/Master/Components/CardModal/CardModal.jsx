import React from "react";
import PropTypes from "prop-types";

import styles from "./cardModal.module.scss";
import globalStyles from "../global.module.scss";

const CardModal = ({ isModalOpen, toggleModal }) => {
  if (!isModalOpen) {
    return null;
  }
  return (
    <div className={styles.pageWrapper} onClick={() => toggleModal()}>
      <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <div>content content content</div>
          <div>content content content</div>
          <button className={globalStyles.button} onClick={() => toggleModal()}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardModal;

CardModal.propTypes = {
  isModalOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
};
