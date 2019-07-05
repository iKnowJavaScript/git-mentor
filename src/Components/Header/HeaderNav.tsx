import React, { useState } from 'react';
import styles from './HeaderNav.module.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import firebase from 'firebase';

const HeaderNav = () => {
  const [isModal, setModal] = useState(false);

  const handleModal = () => {
    setModal(() => !isModal);
  };

  return (
    <header className={`${styles.navbar} ${styles.navbarHeaderTransparent}`}>
      <div className="navLeft">
        <Link
          to="/"
          rel="noopener noreferrer"
          className={`${styles.navbarBrand} ${styles.animated}`}
        >
          GitMentor
        </Link>
      </div>
      <div className={styles.navRight}>
        <ul>
          <Link to="/mentors" rel="noopener noreferrer">
            <li className={`${styles.mainNav} ${styles.button}`}>Mentors</li>{' '}
          </Link>
          <Link to="/" rel="noopener noreferrer">
            <li className={`${styles.mainNav} ${styles.community}`}>Community</li>
          </Link>
          <Link to="/" rel="noopener noreferrer">
            <li className={`${styles.mainNav} ${styles.about}`}>About</li>
          </Link>
          <div className={styles.controlNav}>
            <Link to="/" rel="noopener noreferrer">
              <li className={styles.signIn}>Sign in</li>
            </Link>

            <li className={`${styles.signUp} ${styles.button}`} onClick={handleModal}>
              Register
            </li>
          </div>
        </ul>
      </div>
      <Modal open={isModal} toggle={handleModal} />
    </header>
  );
};

export default HeaderNav;
