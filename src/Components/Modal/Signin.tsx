import React from 'react';

import styles from './Signin.module.css';

const Signin = () => {
  return (
    <div className={styles.signin}>
      <h2>Sign in</h2>

      <button className={`${styles.button} ${styles.accept}`}> Sign in with GitHub</button>

      <h3>or Sign in with GitHub Username</h3>
      <input
        className={`${styles.button} ${styles.input}`}
        type="text"
        placeholder="Your GitHub Username"
      />

      <button className={`${styles.button} ${styles.create}`}> Log in</button>
    </div>
  );
};

export default Signin;
