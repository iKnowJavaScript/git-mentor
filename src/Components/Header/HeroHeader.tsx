import React from 'react';
import styles from './HeroHeader.module.css';
import { Link } from 'react-router-dom';

// className="bold-headline margin-top0 hero-item"
const HeroHeader = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <img
          alt="Gitlab hero background left svg"
          className={`${styles.heroBg} ${styles.heroBgLeft}`}
          src="https://about.gitlab.com/images/home/hero-bg-left.svg"
        />
        <img
          alt="Gitlab hero background right svg"
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
              GitLab is a single application for the entire software development lifecycle. From
              project planning and source code management to CI/CD, monitoring, and security.{' '}
            </p>
            <p className={styles.noAssembly}> *No assembly required. </p>
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

      <a className={styles.announcementContainer} href="/#">
        <img
          className={styles.icon}
          src="https://about.gitlab.com/images/press/press-release-icon.svg"
        />
        <div className={styles.iconContent}>
          <p> Feel free to explore your mentor Git Repos in Dashboard </p>
        </div>
        <img
          alt="Gitlab arrow svg"
          className={styles.announcementArrow}
          src="https://about.gitlab.com/images/solutions/arrow.svg"
        />
      </a>
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
