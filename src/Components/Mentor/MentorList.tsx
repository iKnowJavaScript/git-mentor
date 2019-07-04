import React from 'react';
import styles from './MentorList.module.css';
import Star from './Star';
import { Link } from 'react-router-dom';

const MentorList = () => {
  return (
    <div className={styles.header}>
      <div className={styles.profile_pic}>
        <div className={styles.image}>
          <img
            alt="Marcos Casagrande"
            src="https://process.filestackapi.com/cache=expiry:max/resize=width:240/Um7YHRMHQ3qx59ev8I5f"
          />
        </div>
        <div className={styles.status}>
          <p>
            {' '}
            <span /> Online
          </p>
        </div>
      </div>

      <div className={styles.detail}>
        <div className={styles.names}>
          <div className={styles.name}>Prosper Otemuyiwa</div>
          <div className={styles.starRating}>
            <div className={styles.rating}>5.0</div>
            <div className={styles.star}>
              <Star /> <Star /> <Star /> <Star /> <Star />
            </div>
          </div>
        </div>
        <div className={styles.intro}>
          A Senior Web Envangelist, Advocating for better web. Remember every new day is a reminder
          to be world class.
        </div>
        <div className={styles.location}>
          <div className={styles.language}>
            Language: <span className={styles.lang}>English</span>{' '}
            <span className={styles.lang}>Yoruba</span>
          </div>
          <div className={styles.country}>
            {' '}
            <span /> Lagos, Nigeria
          </div>
        </div>
        <div className={styles.text}>
          <p>
            Web and Java developer who loves to fix bugs. I believe in Karma and I believe in the
            quote "REAL PROGRAMMER'S EYE IS A DEBUGGER." **If I can't fix your issue, you'll get a
            refund. I do not...
          </p>
        </div>
        <div className={styles.expertise}>
          {' '}
          <p> SKILLS</p> <span className={styles.expert}>PHP</span>
          <span className={styles.expert}>JavaScript</span>{' '}
          <span className={styles.expert}>MySql</span>
          <span className={styles.expert}>Git</span>
          <span className={styles.expert}>Database</span>
        </div>
        <div className={styles.availability}>
          <span>-</span> Available as Mentor in area of Expertise <span>-</span>{' '}
        </div>
      </div>
      <div className={styles.hire}>
        <Link to="/profile" rel="noopener noreferrer">
          <div className={`${styles.button} ${styles.colored}`}>View Profile</div>
        </Link>
        <a href="http://github.com">
          {' '}
          <div className={`${styles.button} ${styles.border}`}>GitHub Profile</div>
        </a>
      </div>
    </div>
  );
};

export default MentorList;
