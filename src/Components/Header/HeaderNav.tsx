import React from 'react';
import styles from './HeaderNav.module.css';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <header className={`${styles.navbar} ${styles.navbarHeaderTransparent}`}>
      <div className="navLeft">
        <a className={`${styles.navbarBrand} ${styles.animated}`} href="#">
          GitMentor
        </a>
      </div>
      <div className={styles.navRight}>
        <ul>
          <Link to="/mentors" rel="noopener noreferrer">
            <li className={`${styles.mainNav} ${styles.button}`}>Mentors</li>{' '}
          </Link>
          <li className={`${styles.mainNav} ${styles.community}`}>Community</li>
          <li className={`${styles.mainNav} ${styles.about}`}>About</li>
          <div className={styles.controlNav}>
            <li className={styles.signIn}>Sign in</li>
            <li className={`${styles.signUp} ${styles.button}`}>Register</li>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default HeaderNav;
