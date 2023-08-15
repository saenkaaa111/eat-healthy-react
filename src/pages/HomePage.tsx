import React from 'react'


import './HomePage.scss';
//import { Categories } from './components/Categories/Categories';
import { HeroSection } from './components/HeroSection/HeroSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection/WhyChooseUsSection';
import { AboutUsSection } from './components/AboutUs/AboutUsSection';
import { FreshVegetablesSection } from './components/FreshVegetablesSection/FreshVegetablesSection';
import { BestChefsSection } from './components/BestChefsSection/BestChefsSection';
import { SpecialDishesSection } from './components/SpecialDishesSection/SpecialDishesSection';
import { HappyClientsSection } from './components/HappyClientsSection/HappyClientsSection';
import { SubscriptionSection } from './components/SubscriptionSection/SubscriptionSection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <AboutUsSection/>
      <FreshVegetablesSection/>
      <BestChefsSection/>
      <SpecialDishesSection/>
      <HappyClientsSection/>
      <SubscriptionSection/>
    </>
  );
}
