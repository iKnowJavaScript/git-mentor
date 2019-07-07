import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.header}>PRODUCTS</div>
          <p className={styles.home}>
            <a href="./">
              <span className={styles.spanHeader}>Gitmentor</span>Find a mentor to help you in real
              time
            </a>
          </p>
          <p className={styles.mentors}>
            <a href="./">
              <span className={styles.spanHeader}>MentorX</span>Get world class mentor from the
              GitHub today
            </a>
          </p>
          <p className={styles.community}>
            <a href="https://github.com">
              <span className={styles.spanHeader}>Community</span>Share insights, exchange ideas,
              and learn from fellow developers
            </a>
          </p>
        </div>
        <div className={styles.infoHeader}>
          <div className={styles.info}>INFO</div>
          <div>
            <a href="./" className={styles.spanHeaders}>
              Become a Gitmentor
            </a>
            <a href="./" className={styles.spanHeaders}>
              Apply as a developer
            </a>
            <a href="./" className={styles.spanHeaders}>
              Find Software Developers
            </a>
            <a href="./" className={styles.spanHeaders}>
              Freelance Rates
            </a>
            <a href="./" className={styles.spanHeaders}>
              Freelance Jobs
            </a>
            <a href="./" className={styles.spanHeaders}>
              Gitmentor Reviews
            </a>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.footer}>
          <div className={styles.copyright}>© Copyright 2019 Gitmentor</div>
          <div className={styles.links}>
            <a href="./" className={styles.others}>
              Privacy Policy
            </a>
            <a href="./" className={styles.others}>
              Support
            </a>
            <a href="./" className={styles.others}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      {/* <div className={styles.footer}></div> */}
    </footer>
  );
};

export default Footer;
