import styled from 'styled-components';

const primaryColor = '#29A0B1';
const secondaryColor = '#98D7C2';
const accentColor = '#DDFFE7';
const tealGreen = '#167D7F';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 35vw;
`;

export const SkillName = styled.h3`
  color: ${tealGreen};
  margin-bottom: 0.5rem;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e6e6e6;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
`;

export const ProgressBar = styled.div<{ progress: number; animate: boolean }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: ${tealGreen};
  transition: width ${({ animate }) => (animate ? '1.5s' : '0s')} ease;
`;

export const SkillLevel = styled.span`
float:right;
  font-size: 14px;
  font-weight: normal;
  margin-top: 5px;
`;