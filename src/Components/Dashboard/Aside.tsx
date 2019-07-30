import React from 'react';
import styles from './Aside.module.css';
import Star from '../Mentor/Star';

const Aside = ({ userData }: any) => {
  const { email, displayName, photoURL } = userData;
  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.top} />
          <div className={styles.image}>
            <img className={styles.asideImage} alt={displayName} src={photoURL} />
          </div>

          <div className={styles.name}>{displayName}</div>

          <div>
            <div className={styles.profession}>Snr. Software Engineer</div>
            <div className={styles.rating}>
              <div className={styles.star}>
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>

              <div> 5.0</div>
            </div>
          </div>

          <hr className={styles.hr} />

          <div className={styles.other_details}>
            <h3 className={styles.detail_header}>Contact Information</h3>
            <div className={styles.email}>
              <h5>Email Address </h5>
              <p>{email}</p>
            </div>
            <div className={styles.location}>
              <h5>Location </h5>
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          <hr className={styles.hr} />

          <div className={styles.tags}>
            <span className={styles.tag}>PHP</span>
            <span className={styles.tag}>JavaScript</span>
            <span className={styles.tag}>MySql</span>
            <span className={styles.tag}>Git</span>
            <span className={styles.tag}>Database</span>
            <span className={styles.tag}>NodeJS</span>
            <span className={styles.tag}>Testing</span>
          </div>
        </div>
      </div>
      <div>
        <h2 className={`${styles.button} ${styles.colored}`}>Request MentorShip</h2>
      </div>
    </aside>
  );
};

export default Aside;
