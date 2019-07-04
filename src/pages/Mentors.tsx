import React from 'react';

import HeaderNav from '../Components/Header/HeaderNav';
import MentorHero from '../Components/Mentor/MentorHero';
import MentorList from '../Components/Mentor/MentorList';
import LoadMore from '../Components/Mentor/LoadMore';
import Footer from '../Components/Footer/Footer';
import Greeting from '../Components/Sections/Greeting';

const Mentors = () => {
  return (
    <>
      <HeaderNav />
      <MentorHero />
      <MentorList />
      <MentorList />
      <MentorList />
      <MentorList />
      <MentorList />
      <MentorList />
      <MentorList />

      <LoadMore />

      <Greeting />

      <Footer />
    </>
  );
};

export default Mentors;
