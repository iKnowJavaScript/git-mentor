import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';

import board from '../../assets/images/board.png';

const Error = () => (
  <div className={styles.container}>
    <Link to="/" className={styles.title}>
      GitMentor
    </Link>
    <div className={styles.centered}>
      <div className={styles.image_container}>
        <img className={styles.board} src={board} alt="board" />
        <div className={styles.image_text}>404</div>
      </div>
      <div className={styles.text}>
        <h2>Oops, you've encountered an error!</h2>
        <p>Looks like the page you are trying to visit doesn't exist.</p>
        <Link to="/" className={styles.button}>
          Take Me Home
        </Link>
      </div>
    </div>
    <footer>2019 404 Error. All Rights Reserved | GitMentor</footer>
  </div>
);

export default Error;
