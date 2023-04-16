import React,{ RefObject }  from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaGlobe } from 'react-icons/fa';
import './Navbar.styles.ts';
import { useTranslation } from 'react-i18next';
import {StyledNavbar} from './Navigation.styles';


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
    <StyledNavbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand onClick={() => scrollToRef(homeRef)}>
          {t('website.title')}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => scrollToRef(homeRef)}>
          {t('nav.home')}
          </Nav.Link>
          <Nav.Link onClick={() => scrollToRef(aboutMeRef)}>
          {t('nav.about')}
          </Nav.Link>
          <Nav.Link onClick={() => scrollToRef(skillsRef)}>
          {t('nav.skills')}
          </Nav.Link>
          <Nav.Link onClick={() => scrollToRef(portfolioRef)}>
          {t('nav.portfolio')}
          </Nav.Link>
          <Nav.Link onClick={() => scrollToRef(contactRef)}>
          {t('nav.contact')}
          </Nav.Link>
        </Nav>
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary">
            <FaGlobe />
          </Dropdown.Toggle>
          <Dropdown.Menu>
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
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Navigation;
