import styled from "styled-components";

export const CircularProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin: 10px;
`;

export const CircleContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const CircleBase = styled.circle`
  stroke: #e6e6e6;
  fill: transparent;
`;

export const CircleProgress = styled.circle`
  stroke: #167D7F;
  stroke-linecap: round;
  fill: transparent;
`;

export const SkillName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

export const SkillLevel = styled.div`
  font-size: 14px;
  font-weight: normal;
  margin-top: 5px;
`;
export const StyledSVG = styled.svg`
transform: rotate(270deg);
`;
