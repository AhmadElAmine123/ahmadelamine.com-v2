import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #29A0B1;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const FooterLink = styled.a`
  color: #DDFFE7;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    color: #98D7C2;
  }
`;

export const FooterText = styled.p`
  color: #DDFFE7;
  margin: 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialMediaIcon = styled.a`
  color: #DDFFE7;
  font-size: 1.2rem;
  margin-left: 0.5rem;

  &:hover {
    color: #98D7C2;
  }
`;
