import styled from 'styled-components';

export const Header = styled.header`
font-size: 32px;
font-weight: bold;
color: #29A0B1;
margin-bottom: 20px;
margin-left:2vw;
`;

export const Title = styled.h1``;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  background-color: #98D7C2;
  border: none;
  color: #167D7F;
  padding: 8px 16px;
  margin: 0 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #29A0B1;
    color: #DDFFE7;
  }
`;

export const PortfolioGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ProjectCard = styled.div`
  width: 300px;
  background-color: #29A0B1;
  padding: 15px;
  color: #DDFFE7;
  border-radius: 5px;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const CardTitle = styled.h3`
  margin: 10px 0;
`;

export const CardExcerpt = styled.p`
  margin-bottom: 10px;
`;
