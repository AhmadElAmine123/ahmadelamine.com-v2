import styled from 'styled-components';
import {PageWrapper} from '../../components/shared/PageWrapper';

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
background-color:rgba(0, 0, 0, 0.5);
`;
export const WelcomeText = styled.h1`
  font-size:3rem;
  font-weight:blod;
  color:#DDFFE7;
`;
export const Introduction = styled.p`
  font-size:1.5rem;
  color:#DDFFE7;
`