import styled from "styled-components";
import { Container } from "react-bootstrap";

export const SkillsWrapper = styled.div`
  padding: 2rem 0;
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 765px) {
    &:first-child {
      margin-bottom: 2rem;
    }
  }
`;

export const SkillsTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #29A0B1;
  margin-bottom: 20px;
  margin-left:2vw;
`;

export const SkillsText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #167D7F;
  margin-left:2vw;
`;