import React,{ RefObject }  from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaGlobe } from 'react-icons/fa';
import './Navbar.styles.ts';
import { useTranslation } from 'react-i18next';
import { StyledNavbar ,
  BrandStyle, 
  StyledLink, 
  Globe, 
  DropDownStyled, 
  DropDownMenuStyled, 
  CollapseStyled,
  DownloadButton} from './Navigation.styles';
import resumePdf from '../../assets/AhmadElAmineResume.pdf';

interface NavigationProps {
  scrollToRef: (ref: RefObject<HTMLDivElement>) => void;
  homeRef: RefObject<HTMLDivElement>;
  aboutMeRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  portfolioRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const Navigation: React.FC<NavigationProps> = ({
  scrollToRef,
  homeRef,
  aboutMeRef,
  skillsRef,
  portfolioRef,
  contactRef,
}) => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  


  return (
    <StyledNavbar expand="lg" fixed="top">
      <BrandStyle onClick={() => scrollToRef(homeRef)}>
          {t('website.title')}
      </BrandStyle>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <CollapseStyled id="basic-navbar-nav">
        <Nav className="mr-auto">
          <StyledLink onClick={() => scrollToRef(homeRef)}>
          {t('nav.home')}
          </StyledLink>
          <StyledLink onClick={() => scrollToRef(aboutMeRef)}>
          {t('nav.about')}
          </StyledLink>
          <StyledLink onClick={() => scrollToRef(skillsRef)}>
          {t('nav.skills')}
          </StyledLink>
          <StyledLink onClick={() => scrollToRef(portfolioRef)}>
          {t('nav.portfolio')}
          </StyledLink>
          <StyledLink onClick={() => scrollToRef(contactRef)}>
          {t('nav.contact')}
          </StyledLink>
        </Nav>
        <Dropdown>
          <DropDownStyled variant="outline-secondary">
            <Globe />
          </DropDownStyled>
          <DropDownMenuStyled>
            <Dropdown.Item onClick={() => changeLanguage('en')}>
              English
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage('fr')}>
              Français
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage('de')}>
              Deutsch
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage('es')}>
              Español
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage('ar')}>
            عربي
            </Dropdown.Item>
          </DropDownMenuStyled>
        </Dropdown>
        <DownloadButton href={resumePdf} target="_blank" download>
          {t('nav.downloadResume')}
        </DownloadButton>

      </CollapseStyled>
    </StyledNavbar>
  );
};

export default Navigation;
