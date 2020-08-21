import React, { Component } from "react";

import { LAST_FM_KEY, timeSince } from "../../Utils/utilities.jsx";
import styles from "./header.module.scss";

class Header extends Component {
  state = {
    trackTitle: "",
    trackArtist: "",
    trackLastPlayedTime: "",
  };

  // componentDidMount() {
  //   fetch(
  //     `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=scottyefird&api_key=${LAST_FM_KEY}&format=json&limit=1`,
  //     {
  //       method: "GET",
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const currentSong = data;
  //       const lastPlayedTrack = currentSong.recenttracks.track[0];
  //       const trackArtist = lastPlayedTrack.artist["#text"];
  //       const nowPlaying =
  //         lastPlayedTrack["@attr"] && lastPlayedTrack["@attr"].nowplaying;

  //       let trackTitle = lastPlayedTrack.name;
  //       let trackLastPlayedTime = "";

  //       // Credit to Tanner Krewson for the logic here
  //       // https://github.com/tannerkrewson/tannerkrewson.github.io/blob/dev/components/Listening.vue

  //       if (nowPlaying) {
  //         trackLastPlayedTime = "Right now, I'm listening to ";
  //       } else {
  //         // converts 9712739817 ms to "4 minute" ago
  //         let timeSinceText = timeSince(lastPlayedTrack.date.uts);

  //         // if it's not 1, make it plural
  //         if (!timeSinceText.startsWith("1 ")) {
  //           timeSinceText += "s";
  //         }
  //         trackLastPlayedTime = timeSinceText + " ago, I listened to ";
  //       }

  //       /* split at the part in front of any hyphen or parentheses
  //        * to take a song title like this:
  //        *     (I Can't Get No) Satisfaction - Mono Version / Remastered 2002
  //        * and turn it into:
  //        *     (I Can't Get No) Satisfaction
  //        * and also cut it off at 32 characters for those songs that be like:
  //        *     Piano Sonata No. 14 in C-Sharp Minor, Op. 27 No. 2 "Moonlight": I. Adagio sostenuto
  //        */
  //       trackTitle = trackTitle
  //         .split(" - ")[0]
  //         .split(" (")[0]
  //         .trim()
  //         .substring(0, 32);

  //       this.setState({ trackTitle, trackLastPlayedTime, trackArtist });
  //     })
  //     .catch("Something has gone wrong:", console.log);
  // }

  render() {
    const { trackTitle, trackLastPlayedTime, trackArtist } = this.state;

    return (
      <div className={styles.headerWrapper}>
        <div>
          <img
            className={styles.avatar}
            src={`${window.location.origin}/images/headshot.jpg`}
            height={150}
            alt="Scotty Efird"
          />
        </div>
        <div className={styles.title}>Scott Efird</div>
        <div className={styles.contactInfo}>
          <a href="mailto:scottyefird@gmail.com">{"Email "}</a>·
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ScottyEfird/personalWebsite"
          >
            {" GitHub "}
          </a>
          ·
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/scottyefird/"
          >
            {" LinkedIn"}
          </a>
        </div>
        {trackLastPlayedTime && (
          <div>
            {trackLastPlayedTime}
            <a
              target="_blank"
              rel="noreferrer"
              href={`//www.youtube.com/results?search_query='${trackTitle} ${trackArtist}`}
            >
              {trackTitle}
            </a>{" "}
            by <i>{trackArtist}</i>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
