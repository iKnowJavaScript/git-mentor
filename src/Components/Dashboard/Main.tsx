import React from 'react';
import styles from './Main.module.css';

import collab from '../../assets/images/collaboration.png';
import mentor from '../../assets/images/mentor.png';
import clock from '../../assets/images/clock.png';

const Main = ({ userData }: any) => {
  const { email, displayName, photoURL } = userData;

  return (
    <main className={styles.main}>
      <div className={styles.user_details}>User Details</div>
      <div className={styles.container}>
        <div className={styles.about}>
          <h2>About {displayName}</h2>
          <p>
            Web and Java developer who loves to fix bugs. I believe in Karma and I believe in the
            quote "REAL PROGRAMMER'S EYE IS A DEBUGGER." **If I can't fix your issue, you'll get a
            refund. I do not...
          </p>
        </div>
        <hr className={styles.hr} />
        <div className={styles.skills}>
          <h2>Git Projects</h2>
        </div>
        <hr className={styles.hr} />

        <div className={styles.boxes}>
          <div className={`${styles.box} ${styles.collab}`}>
            <img src={collab} alt="collaboration" />
            <h2>Collaboration</h2>
            <h3>4</h3>
          </div>
          <div className={`${styles.box} ${styles.mentoring}`}>
            <img src={mentor} alt="mentor" />
            <h2>Mentoring</h2>
            <h3>3 ATM</h3>
          </div>
          <div className={`${styles.box} ${styles.hours}`}>
            <img src={clock} alt="clock" />
            <h2>Voluntering</h2>
            <h3>48 Hours</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
