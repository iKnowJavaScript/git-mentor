import React from 'react';

import styles from './Signup.module.css';

const Signup = () => {
  return (
    <div className={styles.signup}>
      <h2>Sign up</h2>
      <button className={`${styles.button} ${styles.accept}`}> Sign up with GitHub</button>
      <button className={`${styles.button} ${styles.disable}`}> GitBuckect Coming Soon</button>

      <h3>or Sign up with GitHub Username</h3>
      <input
        className={`${styles.button} ${styles.input}`}
        type="text"
        placeholder="Your GitHub Username"
      />

      <button className={`${styles.button} ${styles.create}`}> Create Account</button>
    </div>
  );
};

export default Signup;
