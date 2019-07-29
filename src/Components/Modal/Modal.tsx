import React from 'react';
import Drawer from 'react-drag-drawer';

import styles from './Modal.module.css';
import Signup from './Signup';
import Signin from './Signin';

const Modal = ({ open, toggle }: any) => {
  return (
    <Drawer open={open} onRequestClose={toggle}>
      <div className={`${styles.modal} ${styles.app}`}>
        <div className={styles.container}>
          <div className={styles.form}>
            <h2 className={styles.heading}>Sign in to GitMentor</h2>
            <div className={styles.heading_text}>
              Join the biggest online Open Mentorship program. <br />
              Find a mentor, mentor some more . . .
            </div>
            <Signin />
            <h2 className={styles.bottom}>
              Don’t have an account? <a className={styles.link}>Sign up</a>
            </h2>
          </div>

          <p className={styles.terms}>
            By signing up, you are agreeing to our Terms of Service and Privacy Policy. <br />
            We ask for read/write access to make your experience seamless on <span>GitMentor.</span>
          </p>
        </div>
      </div>
    </Drawer>
  );
};

export default Modal;
