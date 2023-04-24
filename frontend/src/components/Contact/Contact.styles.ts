import styled from 'styled-components';
import {PageWrapper} from '../../components/shared/PageWrapper';

export const ContactContainer = styled(PageWrapper)`
  background-color: #DDFFE7;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #29A0B1;
  margin-bottom: 20px;
`;

export const ContactDescription = styled.p`
  color: #167D7F;
  font-size: 1.2rem;
  max-width: 800px;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const ContactForm = styled.form`
  background-color: #98D7C2;
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
export const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  outline: none;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  grid-column: 1 / 3;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  outline: none;
  resize: none;
`;

export const Button = styled.button`
  background-color: #29A0B1;
  color: #FFFFFF;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #167D7F;
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;

export const SocialLink = styled.a`
  color: #167D7F;
  font-size: 1.2rem;
  margin: 0 1rem;

  &:hover {
    color: #29A0B1;
  }
`;
