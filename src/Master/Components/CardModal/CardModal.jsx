import React from "react";
import PropTypes from "prop-types";

import styles from "./cardModal.module.scss";
import globalStyles from "../global.module.scss";

const CardModal = ({ modalStatus, toggleModal, brand }) => {
  if (!modalStatus || modalStatus !== brand) {
    return null;
  }
  return (
    <div className={styles.pageWrapper} onClick={() => toggleModal()}>
      <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <div className={styles.contentImage}>
            <img
              src={`${window.location.origin}/images/content/${brand}.png`}
              alt="Project that I've worked on"
            />
          </div>
          <div className={styles.contentTextInformation}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <button
              className={globalStyles.button}
              onClick={() => toggleModal(undefined)}
            >
              Close
            </button>
          </div>
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
  experienceData: PropTypes.arrayOf(PropTypes.string),
};
