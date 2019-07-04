import React from 'react';
import styles from './UserStory.module.css';

const UserStory = () => {
  return (
    <section className={styles.userStory}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>You’re in good company</h2>
          <p className={styles.paragraph}>
            Individual and Teams have tried GitMentor, Join GitMentor and share your experience
          </p>
          <p className={styles.paragraph}>
            <a href="#" className={styles.section_link}>
              View all customer stories
            </a>
          </p>
        </header>
      </div>
      <div className={styles.grid_container}>
        <div className={styles.grid_block}>
          <a
            href="#"
            className={styles.mentor_card}
          >
            <figure>
              <img
                className={styles.card_image}
                src="https://a.slack-edge.com/7faa9/marketing/img/stories/intuit/slack-customer-intuit.jpg"
                alt="Play money coins in descending height stacks"
              />
            </figure>
            <figure>
              <img
                className={styles.mentor_name}
                src="https://a.slack-edge.com/7faa9/marketing/img/stories/intuit/intuit.png"
                alt="Intuit"
              />
            </figure>
            <p className={styles.info_text}>
              Connecting teams to support 50 million customers around the world
            </p>
          </a>
          <a href="#" className={styles.mentor_card}>
            <figure>
              <img
                className={styles.card_image}
                src="https://a.slack-edge.com/9fb838/marketing/img/stories/lyft/slack-customer-lyft.jpg"
                alt="Play money coins in descending height stacks"
              />
            </figure>
            <figure>
              <img
                className={styles.mentor_name}
                src="https://a.slack-edge.com/f99a0/marketing/img/logos/testimonials/logo-lyft.png"
                alt="Lyft"
              />
            </figure>
            <p className={styles.info_text}>
              Connecting teams Mission-critical sales work at Lyft Business
            </p>
          </a>
          <a href="#" className={styles.mentor_card}>
            <figure>
              <img
                className={styles.card_image}
                src="https://a.slack-edge.com/9dc80/marketing/img/stories/everlane/slack-customer-everlane.jpg"
                alt="Play money coins in descending height stacks"
              />
            </figure>
            <figure>
              <img
                className={styles.mentor_name}
                src="https://a.slack-edge.com/9dc80/marketing/img/stories/everlane/everlane.png"
                alt="Intuit"
              />
            </figure>
            <p className={styles.info_text}>
              Connecting teams to support 50 million customers around the world
            </p>
          </a>
          <a href="#" className={styles.mentor_card}>
            <figure>
              <img
                className={styles.card_image}
                src="https://a.slack-edge.com/9dc80/marketing/img/stories/shopify/slack-customer-shopify.jpg"
                alt="Play money coins in descending height stacks"
              />
            </figure>
            <figure>
              <img
                className={styles.mentor_name}
                src="https://a.slack-edge.com/7faa9/marketing/img/stories/intuit/intuit.png"
                alt="Intuit"
              />
            </figure>
            <p className={styles.info_text}>
              Connecting teams to support 50 million customers around the world
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UserStory;
