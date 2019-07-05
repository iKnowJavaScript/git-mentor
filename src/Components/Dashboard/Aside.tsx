import React from 'react';
import styles from './Aside.module.css';
import Star from '../Mentor/Star';

const Aside = ({ state }: any) => {
  const { email, displayName, photoURL } = state;
  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.top} />
          <div className={styles.image}>
            <img className={styles.asideImage} alt={displayName} src={photoURL} />
          </div>
          <div className={styles.name}>{displayName}</div>
          <div className={styles.email}>{email}</div>
          <h3 className={styles.location}>Lagos, Nigeria</h3>

          <div className={styles.review}>
            <p>8 Reviewers</p>{' '}
          </div>
          <hr className={styles.hr} />
          <div className={styles.rating}>
            5.0
            <div className={styles.star}>
              <Star /> <Star /> <Star /> <Star /> <Star />
            </div>
          </div>
          <hr className={styles.hr} />
          <div>
            <h3>Has Mentored 20</h3>
          </div>
          <hr className={styles.hr} />
          <div>
            <h3>Has 20 GitHub Star</h3>
          </div>
          <hr className={styles.hr} />
          <div>
            <h3>Followed by 20 People</h3>
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
