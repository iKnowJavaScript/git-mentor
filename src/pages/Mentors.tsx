import React from 'react';

import HeaderNav from '../Components/Header/HeaderNav';
import MentorHero from '../Components/Mentor/MentorHero';
import MentorList from '../Components/Mentor/MentorList';
import LoadMore from '../Components/Mentor/LoadMore';
import Greeting from '../Components/Sections/Greeting';
import Footer from '../Components/Footer/Footer';

const Mentors = (props: any) => {
  return (
    <>
      <HeaderNav props={props}/>
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
