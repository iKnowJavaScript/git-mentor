import React from 'react';
import HeaderNav from '../Components/Header/HeaderNav';
import DashboardHero from '../Components/Dashboard/Dashboard';
import Greeting from '../Components/Sections/Greeting';
import Footer from '../Components/Footer/Footer';

const Profile = (props: any) => {
  const {
    location: { state }
  } = props;

  return (
    <>
      <HeaderNav props={props} />
      <DashboardHero />
      <Greeting />
      <Footer />
    </>
  );
};

export default Profile;
