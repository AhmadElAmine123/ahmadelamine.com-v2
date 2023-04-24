import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterText,
  LogoContainer,
  SocialMediaContainer,
  SocialMediaIcon,
} from "./Footer.styles";
import Logo from "./Logo";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo size="small" />
      </LogoContainer>
      <FooterText>&copy; {new Date().getFullYear()} Ahmad. All rights reserved.</FooterText>
      <SocialMediaContainer>
        <FooterLink href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          GitHub
        </FooterLink>
        <FooterLink href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </FooterLink>
        <SocialMediaIcon href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </SocialMediaIcon>
        <SocialMediaIcon href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </SocialMediaIcon>
        <SocialMediaIcon href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </SocialMediaIcon>
      </SocialMediaContainer>
    </FooterContainer>
  );
};

export default Footer;
