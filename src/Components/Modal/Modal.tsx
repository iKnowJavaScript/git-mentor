import React from 'react';
import Drawer from 'react-drag-drawer';

import styles from './Modal.module.css';
import Signup from './Signup';
import Signin from './Signin';

const Modal = ({ open, toggle, props }: any) => {
  return (
    <Drawer open={open} onRequestClose={toggle}>
      <div className={`${styles.modal} ${styles.app}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Gitmentor</h2>
          <div className={styles.form}>
            <Signin props={props} />
          </div>
          <h2 className={styles.bottom}>
            or You rather <a className={styles.link}>Sign up</a>
          </h2>
        </div>
      </div>
    </Drawer>
  );
};

export default Modal;
