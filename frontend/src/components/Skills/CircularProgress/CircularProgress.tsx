import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import {
  CircularProgressContainer,
  CircleContainer,
  CircleBase,
  CircleProgress,
  SkillName,
  SkillLevel,
  StyledSVG
} from "./CircularProgress.styles";

interface Skill {
  name: string;
  level: number;
  logo: string;
}

interface CircularProgressProps {
  skill: Skill;
  animate: boolean;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ skill, animate }) => {

  const circleRef = useRef<SVGCircleElement>(null);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const duration = 1000; 

  useEffect(() => {
    if (!animate) return;
    const progress = skill.level * 0.2; // Assuming level ranges from 1 to 4
    const offset = circumference - progress * circumference;

    if (circleRef.current) {
      d3.select(circleRef.current)
        .attr("stroke-dasharray", `${circumference} ${circumference}`)
        .attr("stroke-dashoffset", circumference)
        .transition()
        .duration(duration)
        .attr("stroke-dashoffset", offset);
    }
  }, [skill.level, circumference, animate]);
  return (
    <CircularProgressContainer>
      <CircleContainer>
        <StyledSVG width="100" height="100">
          <CircleBase
            r={radius}
            cx="50"
            cy="50"
            strokeWidth="10"
          />
          <CircleProgress
            ref={circleRef}
            r={radius}
            cx="50"
            cy="50"
            strokeWidth="10"
            strokeDashoffset={circumference}
          />
        </StyledSVG>
      </CircleContainer>
      <SkillName>{skill.name}</SkillName>
      <SkillLevel>Level: {skill.level}</SkillLevel>
    </CircularProgressContainer>
  );
};

export default CircularProgress;
