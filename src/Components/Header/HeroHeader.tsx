import React from 'react';
import styles from './HeroHeader.module.css';
import { Link } from 'react-router-dom';

// className="bold-headline margin-top0 hero-item"
const HeroHeader = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <img
          className={`${styles.heroBg} ${styles.heroBgLeft}`}
          src="https://about.gitlab.com/images/home/hero-bg-left.svg"
        />
        <img
          className={`${styles.heroBg} ${styles.heroBgRight}`}
          src="https://about.gitlab.com/images/home/hero-bg-right.svg"
        />

        <div className={styles.heroContent}>
          <h1 className={styles.boldHeadline}>
            Find an Open Source Expert
            <span>.*</span>
          </h1>
          <div className={`${styles.heroItem} ${styles.matrixStyle}`}>
            <p>
              <span className={styles.disclaimer}>Disclaimer:</span> This is a space for those
              looking to accelerate their career in Tech world, Gitmentor made it easy by connecting
              you with Industry experts for advice and direction.
            </p>
            <p className={styles.noAssembly}> *GitHub accout is required. </p>
          </div>
          <div className={`${styles.buttonsContainer} ${styles.matrixStyle}`}>
            <a className={`${styles.button} ${styles.ctaButton} ${styles.orange}`} href="/#">
              Try Mentor for Free
            </a>
            <Link
              to="/mentors"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.ctaButton} ${styles.flexButton}`}
            >
              <div className={`i fas fa-play play-icon ${styles.playIcon}`}> Explore Fields </div>
            </Link>
          </div>
        </div>
        {/* backgroung */}

        <div className={styles.headerBackground} />
      </div>
      {/* </div>  hero ends */}

      <div className={styles.announcementContainer}>
        <img
          className={styles.icon}
          src="https://about.gitlab.com/images/press/press-release-icon.svg"
        />
        <div className={styles.iconContent}>
          <p> Feel free to explore your mentor Git Repos in Dashboard </p>
        </div>
        <Link to="/mentors">
          <img
            alt="Gitlab arrow svg"
            className={styles.announcementArrow}
            src="https://about.gitlab.com/images/solutions/arrow.svg"
          />
        </Link>
      </div>
      <div className={styles.contactMentor}>
        <h2 className={styles.marginTop0}>Are you ready?</h2>{' '}
        <p>You can have a mini chat with an expert before choosing Mentor</p>
        <Link
          to="/mentors"
          rel="noopener noreferrer"
          className={`${styles.button} ${styles.ctaButton} ${styles.orange} ${styles.marginTop20}`}
        >
          {' '}
          Contact Expert{' '}
        </Link>
        <a className={styles.marginTop20} href="/#">
          {' '}
          Or, get started now with a free trial{' '}
        </a>{' '}
      </div>
    </>
  );
};

export default HeroHeader;
