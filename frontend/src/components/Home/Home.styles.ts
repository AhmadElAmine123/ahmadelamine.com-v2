import styled from 'styled-components';
import {PageWrapper} from '../../components/shared/PageWrapper';
import laptop from '../../assets/images/laptop.svg';

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
export const HomePageWrapper = styled(PageWrapper)`
background-image:url(${laptop});
background-repeat: no-repeat;
background-size:40%;
background-position:right;
padding-top:35vh;
@media(max-width: 700px){
  padding-top:15vh;
}
`;
export const WelcomeText = styled.h1`

  font-size:3rem;
  font-weight:blod;
  color:#167D7F;
  
`;
export const Introduction = styled.p`
  font-size:1.5rem;
  color:#167D7F;
  width:60vw;
  @media(max-width: 700px){
    font-size:1.3rem;
  }
`