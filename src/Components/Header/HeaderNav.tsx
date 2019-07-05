import React, { useState, useContext } from 'react';
import styles from './HeaderNav.module.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { UserLogStatus } from '../../Context/Context';
import { Redirect } from 'react-router';

const HeaderNav = ({ props }: any) => {
  const [isModal, setModal] = useState(false);
  const { isLoggedin, setLoggedIn } = useContext(UserLogStatus) as any;

  const handleModal = () => {
    setModal(() => !isModal);
    setLoggedIn(() => !isLoggedin);
    if (isLoggedin.isSignedIn) {
      return <Redirect to="/profile" />;
    }
  };

  const hideElement = () => {
    return isLoggedin ? styles.hide : '';
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
            <Link to="/" rel="noopener noreferrer">
              <li className={`${styles.signIn} ${hideElement()}`}>Sign in</li>
            </Link>

            <li className={`${styles.signUp} ${styles.button}`} onClick={handleModal}>
              {isLoggedin ? 'Log Out' : 'Register'}
            </li>
          </div>
        </ul>
      </div>
      <Modal open={isModal} toggle={handleModal} props={props} />
    </header>
  );
};

export default HeaderNav;
