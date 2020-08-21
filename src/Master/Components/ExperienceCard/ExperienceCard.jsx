import React, { Component } from "react";
import PropTypes from "prop-types";

import CardModal from "./CardModal.jsx";
import styles from "./experienceCard.module.scss";

class ExperienceCard extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { logo, title, dateToFrom, url } = this.props;

    // TODO
    // Need to move this logic up to app so that I have access to the main css body
    //https://www.digitalocean.com/community/tutorials/react-modal-component

    return (
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
            <CardModal
              isModalOpen={isModalOpen}
              toggleModal={this.toggleModal}
            />
            <button onClick={() => this.toggleModal()}>More info</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;

ExperienceCard.propTypes = {
  title: PropTypes.string,
  jobTitle: PropTypes.func,
  location: PropTypes.func,
  dateToFrom: PropTypes.func,
  logo: PropTypes.func,
  url: PropTypes.func,
  experianceData: PropTypes.arrayOf(PropTypes.string),
};
