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
import { useTranslation } from 'react-i18next';

// Replace with the actual profile picture URL
const profilePictureUrl = 'path/to/your/profile-picture.jpg';

const AboutMe: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <AboutMeContainer>
      <LeftColumn>
        <ProfilePicture src={profilePictureUrl} alt="Your Name" />
        <SocialIcons>
          {/* Replace with your actual social media URLs */}
          <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            {/* Import and use the LinkedIn icon */}
          </SocialIcon>
          <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
            {/* Import and use the GitHub icon */}
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
