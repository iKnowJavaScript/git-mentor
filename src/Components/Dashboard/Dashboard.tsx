import React from 'react';
import styles from './Dashboard.module.css';
import Aside from './Aside';
import Main from './Main';

const DashboardHero = ({ state }: any) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.flexContainer}>
        <Aside state={state}/>
        <Main state={state}/>
      </div>
    </div>
  );
};

export default DashboardHero;
