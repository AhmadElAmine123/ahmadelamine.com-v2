import styled from 'styled-components';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  text-align: justify;
`;

// Add more styled components as needed

export const StyledNavbar = styled(Navbar)`
  /* Add your custom styles here */
  position:fixed;
`;
