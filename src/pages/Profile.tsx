import React from 'react';
import HeaderNav from '../Components/Header/HeaderNav';
import DashboardHero from '../Components/Dashboard/Dashboard';
import Greeting from '../Components/Sections/Greeting';
import Footer from '../Components/Footer/Footer';

const Profile = ({ location: { state } }: any) => {
  return (
    <>
      <HeaderNav />
      <DashboardHero state={state} />
      <Greeting />
      <Footer />
    </>
  );
};

export default Profile;
