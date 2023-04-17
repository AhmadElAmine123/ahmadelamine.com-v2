import styled from 'styled-components';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaGlobe } from 'react-icons/fa';

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
  background-color:#29A0B1;
`;
export const CollapseStyled = styled(Navbar.Collapse)`
  text-align:center;
`;
export const BrandStyle = styled (Navbar.Brand)`
  color:#DDFFE7;
  &:hover {
    color: #98D7C2;
  }
`;
export const StyledLink = styled (Nav.Link )`
  color:#DDFFE7;
  &:hover {
    color: #98D7C2;
  }
`;
export const Globe = styled (FaGlobe )`
  color:#DDFFE7;
`;
export const DropDownStyled = styled(Dropdown.Toggle )`
border-width:0px;
&:hover {
  background-color: #98D7C2;
}
`;
export const DropDownMenuStyled = styled(Dropdown.Menu)`
  background-color:#167D7F;
  color:#DDFFE7;
`;
