import React, { useState, useContext, useEffect } from 'react';
import styles from './HeaderNav.module.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { UserLogStatus } from '../../Context/Context';

import * as firebase from 'firebase';
import 'firebase/auth';
const firebaseAuth: any = firebase.auth();

const HeaderNav = () => {
  const { isLoggedin, setLoggedIn } = useContext(UserLogStatus) as any;
  const [isModal, setModal] = useState(false);

  const handleModal = () => {
    setModal(() => !isModal);
  };

  const handleLogOut = () => {
    firebaseAuth.signOut().then(console);
    setLoggedIn(() => false);
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
          <li className={`${styles.mainNav} ${styles.about}`}>About</li>
          <div className={styles.controlNav}>
            <>
              {isLoggedin ? (
                <li className={`${styles.signOut} ${styles.button}`} onClick={handleLogOut}>
                  Log Out
                </li>
              ) : (
                <li className={`${styles.signUp} ${styles.button}`} onClick={handleModal}>
                  Register
                </li>
              )}
            </>
          </div>
        </ul>
      </div>
      <Modal open={isModal} toggle={handleModal} />
    </header>
  );
};

export default HeaderNav;
