import React from 'react';
import styles from './Dashboard.module.css';
import Aside from './Aside';
import Main from './Main';

const DashboardHero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.flexContainer}>
        <Aside />
        <Main />
      </div>
    </div>
  );
};

export default DashboardHero;
