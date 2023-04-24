import React from 'react';
import {
  AboutMeContainer,
  LeftColumn,
  ProfilePicture,
  SocialIcons,
  SocialIcon,
  RightColumn,
  AboutMeTitle,
  AboutMeText,
  SectionTitle,
  TextOnlyDesktop
} from './AboutMe.styles';
import Ahmad from '../../assets/images/ahmad.jpeg';
import { useTranslation } from 'react-i18next';


const AboutMe: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <AboutMeContainer>
      <LeftColumn>
        <ProfilePicture src={Ahmad} alt="Your Name" />
        <SocialIcons>
          <SocialIcon href="www.linkedin.com/in/ahmad-amine" target="_blank" rel="noopener noreferrer">
          </SocialIcon>
          <SocialIcon href="https://github.com/AhmadElAmine123" target="_blank" rel="noopener noreferrer">
            
          </SocialIcon>
        </SocialIcons>
      </LeftColumn>
      <RightColumn>
        <AboutMeTitle>{t('about.title')}</AboutMeTitle>
        <AboutMeText>
          {t('about.intro')}
        </AboutMeText>
        <SectionTitle>Experience</SectionTitle>
        <AboutMeText>
          {t('about.experience.geek')}
        </AboutMeText>
        <TextOnlyDesktop>
          {t('about.experience.linkit')}
        </TextOnlyDesktop>
        <AboutMeText>
          {t('about.freelance')}
        </AboutMeText>
        
      </RightColumn>
    </AboutMeContainer>
  );
};

export default AboutMe;
