import React from 'react';

import HeaderNav from '../Components/Header/HeaderNav';
import HeroHeader from '../Components/Header/HeroHeader';
import UserStory from '../Components/Sections/UserStory';
import Greeting from '../Components/Sections/Greeting';
import Footer from '../Components/Footer/Footer';

const Homepage = (props: any) => {
  return (
    <>
      <HeaderNav props={props} />
      <HeroHeader />
      <UserStory />
      <Greeting />
      <Footer />
    </>
  );
};

export default Homepage;
