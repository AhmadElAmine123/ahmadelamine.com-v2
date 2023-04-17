import styled from 'styled-components';

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


export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfilePicture = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

export const SocialIcon = styled.a`
  color: #167D7F;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #29A0B1;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width:768px){
    margin-left:5px;
  }
`;

export const AboutMeTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #29A0B1;
  margin-bottom: 20px;
`;

export const AboutMeText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #167D7F;
`;
export const TextOnlyDesktop = styled(AboutMeText)`
  @media(max-width: 768px){
    display: none;
  }
`;

export const Highlight = styled.span`
  font-weight: bold;
  color: #98D7C2;
`;

export const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #167D7F;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const SkillLabel = styled.span`
  font-size: 18px;
  color: #167D7F;
`;

export const SkillBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #DDFFE7;
  border-radius: 5px;
  overflow: hidden;
`;

export const SkillProgress = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: #29A0B1;
  transition: width 1s ease;
`;
