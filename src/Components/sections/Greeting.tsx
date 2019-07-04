import React from 'react';
import styles from './Greeting.module.css';

const Greeting = () => {
  return (
    <section className={styles.greeting}>
      <div className={styles.content}>
        <h3 className={styles.greeting_text}>Say hello to the collaborative Mentorship hub</h3>
        <a href="#" className={`${styles.button} ${styles.secondary}`}>
          Try gitMentor for free
        </a>
      </div>
    </section>
  );
};

export default Greeting;
