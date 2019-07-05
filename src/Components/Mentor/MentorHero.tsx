import React from 'react';
import styles from './MentorHero.module.css';

const MentorHero = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <section className={styles.section} />
        <h1 className={styles.experts}>
          <span className="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgElelment}
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M4.24 6.431l7-4.219a1.469 1.469 0 0 1 1.52 0l7 4.22c.459.275.74.78.74 1.324v8.488c0 .545-.281 1.049-.74 1.325l-7 4.219a1.469 1.469 0 0 1-1.52 0l-7-4.22a1.545 1.545 0 0 1-.74-1.324V7.756c0-.545.281-1.049.74-1.325zm12.586 6.07l-2.578 2.576a.207.207 0 0 0-.065.15c0 .056.022.107.065.15l.33.329a.207.207 0 0 0 .15.066.207.207 0 0 0 .15-.066l3.056-3.055a.207.207 0 0 0 .066-.15.207.207 0 0 0-.066-.15l-3.056-3.055a.207.207 0 0 0-.15-.066.207.207 0 0 0-.15.066l-.33.325a.208.208 0 0 0 0 .304l2.578 2.576zm-6.454 4.116a.203.203 0 0 0 .018.16.22.22 0 0 0 .129.103l.404.11a.185.185 0 0 0 .156-.016.218.218 0 0 0 .1-.129l2.446-8.46a.207.207 0 0 0-.144-.263l-.407-.113a.178.178 0 0 0-.153.019.201.201 0 0 0-.1.125l-2.45 8.464zm-1.253-.911a.209.209 0 0 0 .304 0l.325-.329a.207.207 0 0 0 .066-.15.207.207 0 0 0-.066-.15L7.174 12.5l2.574-2.576a.207.207 0 0 0 0-.304l-.325-.325a.207.207 0 0 0-.304 0L6.066 12.35A.207.207 0 0 0 6 12.5c0 .056.022.106.066.15l3.053 3.055z"
              />
            </svg>
          </span>
          <span> GitMentor Experts</span>
        </h1>

        <section />

        <div className={styles.inputSearch}>
          <div className={styles.reactForm}>
            <span className={styles.searchSVG}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fillRule="nonzero" fill="none">
                  <path d="M0 0h24v24H0z" />
                  <path
                    fill="#000"
                    d="M16.986 15.994l5.013 5.014-.99.99-5.013-5.014a8.5 8.5 0 1 1 .99-.99zM10.5 3.4a7.108 7.108 0 0 0-7.1 7.1c0 3.915 3.185 7.1 7.1 7.1 3.915 0 7.1-3.185 7.1-7.1 0-3.915-3.185-7.1-7.1-7.1z"
                  />
                </g>
              </svg>
            </span>
            <div className={styles.searchInput}>
              <div className={styles.topInput}>
                <span>
                  <span className={styles.inputStyle}>
                    <div className={styles.searchContainer}>
                      <input className={styles.top_input} placeholder='seach for mentor' />
                      <div className={styles.reactAuto} />
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
    </>
  );
};

export default MentorHero;
