import React from 'react';
import styles from './Main.module.css';

const Main = ({ state }: any) => {
  console.log('main', state);
  const { email, displayName, photoURL } = state;

  return (
    <main className={styles.main}>
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
          <h2>SKILLS</h2>
          <span className={styles.expert}>PHP</span>
          <span className={styles.expert}>JavaScript</span>{' '}
          <span className={styles.expert}>MySql</span>
          <span className={styles.expert}>Git</span>
          <span className={styles.expert}>Database</span>
        </div>
        <hr className={styles.hr} />
        <div className={styles.boxes}>
          <div className={`${styles.box} ${styles.collab}`}>
            <p>icon</p>
            <h2>Collaboration</h2>
            <h3>4</h3>
          </div>
          <div className={`${styles.box} ${styles.mentoring}`}>
            <p>icon</p>
            <h2>Mentoring</h2>
            <h3>3 ATM</h3>
          </div>
          <div className={`${styles.box} ${styles.hours}`}>
            <p>icon</p>
            <h2>Voluntering</h2>
            <h3>48 Hours</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
