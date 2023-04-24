import React, { useEffect, useState } from 'react';
import { Container,
  SkillName,
  ProgressBarContainer,
  ProgressBar,
  SkillLevel } from './SkillBar.styles';

interface Skill {
  name: string;
  level: number;
  logo: string;
}

interface SkillBarProps {
  skill: Skill;
  animate: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, animate }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (animate) {
      setProgress(skill.level * 20); // assuming the skill level is between 1 and 5
    }
  }, [animate, skill.level]);

  return (
    <Container>
      <SkillName>{skill.name} <SkillLevel>Level: {skill.level}</SkillLevel></SkillName>
      
      <ProgressBarContainer>
        <ProgressBar progress={progress} animate={animate} />
      </ProgressBarContainer>
    </Container>
  );
};

export default SkillBar;
