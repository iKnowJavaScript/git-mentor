import React from 'react';

import HeaderNav from '../Components/Header/HeaderNav';
import HeroHeader from '../Components/Header/HeroHeader';
import UserStory from '../Components/sections/UserStory';
import Greeting from '../Components/sections/Greeting';
import Footer from '../Components/footer/Footer';

const Homepage = () => {
  return (
    <>
      <HeaderNav />
      <HeroHeader />
      <UserStory />
      <Greeting />
      <Footer />
    </>
  );
};

export default Homepage;
