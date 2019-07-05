import React, { useContext } from 'react';
import styles from './Dashboard.module.css';
import Aside from './Aside';
import Main from './Main';
import { UserLogStatus, UserObject } from '../../Context/Context';

const DashboardHero = () => {
  const { userData, setUserData } = useContext(UserObject) as any;

  return (
    <div className={styles.heroContainer}>
      <div className={styles.flexContainer}>
        <Aside userData={userData} />
        <Main userData={userData} />
      </div>
    </div>
  );
};

export default DashboardHero;
