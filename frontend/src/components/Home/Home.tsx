import React, { useState, useEffect } from 'react';
import { Heading } from './Home.styles';
import { useTranslation } from 'react-i18next';
import {HomePageWrapper, Introduction, WelcomeText} from './Home.styles';


const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <HomePageWrapper>
      <WelcomeText>{t('home.welcome')}</WelcomeText>
      <Introduction>{t('home.introduction')}</Introduction>
    </HomePageWrapper>
  );
};

export default Home;
