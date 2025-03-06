import React from 'react';
import Banner from './Banner';
import HomeCategory from "./HomeCategory";
import CategorySowCase from './CategorySowCase';
import Register from './Register';
import LocationSpread from './LocationSpread';
import AboutUs from './AboutUs';
import AppSection from './AppSection';
import Sponsor from './Sponsor';

const Home = () =>{
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategorySowCase/>
      <Register/>
      <LocationSpread/>
      <AboutUs/>
      <AppSection/>
      <Sponsor/>
    </div>
  )
};

export default Home;