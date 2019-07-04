import React from 'react';
import Drawer
 from 'react-drag-drawer';

import styles from './Modal.module.css';

const Modal = ({ open, toggle }: any) => {
  return (
    <Drawer open={open} onRequestClose={toggle}>
      <div className={`${styles.modal} ${styles.app}`}>
        <div className={styles.textCenter}>  
        <h2>Sign In with Github</h2>
        <h2>Sign In with Github</h2>
        <h2>Sign In with Github</h2>
        <h2>Sign In with Github</h2>
        <h2>Sign In with Github</h2>

        <h2>Sign In with Github</h2>
        <h2>Sign In with Github</h2>
        <h2>Sign In with Github</h2>
        </div>
      </div>
    </Drawer>
  );
};

export default Modal;
