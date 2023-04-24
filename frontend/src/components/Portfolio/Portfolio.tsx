import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {PageWrapper} from '../../components/shared/PageWrapper';
import ToComfortHome from '../../assets/images/projects/toComfort/Home.png';
import HKCHome from '../../assets/images/projects/hkc/Home.png';
import Portfolio1Home from '../../assets/images/projects/portfolio-v1/Home.png';
import Portfolio2Home from '../../assets/images/projects/portfolio-v2/Home.png';
// ... import more images as needed

import {
  Header,
  Title,
  Filter,
  FilterButton,
  PortfolioGrid,
  ProjectCard,
  CardImage,
  CardTitle,
  CardExcerpt,
} from './Portfolio.styles';
interface Project {
  projectName: string;
  featuredImageURL: string;
  projectType: string;
  excerpt: string;
}

interface ProjectType {
  TypeName: string;
}

type ImageMapType = {
  [key: string]: string;
};

const Portfolio = () => {
  const [filter, setFilter] = useState<string>('all');
  const { t, i18n } = useTranslation();
  let projects = t('projects', { returnObjects: true }) as Array<Project>;
  let projectTypes = t('projectTypes', { returnObjects: true }) as Array<ProjectType>;
  

  const imageMap: ImageMapType = {
    ToComfortHome,
    HKCHome,
    Portfolio1Home,
    Portfolio2Home
  }
  const filteredProjects = () => {
    if (filter === 'all') {
      return projects;
    }
    return projects.filter((p: Project) => p.projectType === filter);
  };

  return (
    <PageWrapper>
      <Header>
        <Title>{t('portfolio.title')}</Title>
      </Header>
      <Filter>
        <FilterButton onClick={() => setFilter('all')}>{t('allProjects')}</FilterButton>
        {projectTypes.map((type: ProjectType, index: number) => (
          <FilterButton key={index} onClick={() => setFilter(type.TypeName)}>
            {type.TypeName}
          </FilterButton>
        ))}
      </Filter>
      <PortfolioGrid>
        {filteredProjects().map((p: Project, index: number) => (
          <ProjectCard key={index}>
            <CardImage src={imageMap[p.featuredImageURL]} alt={p.projectName} />
            <CardTitle>{p.projectName}</CardTitle>
            <CardExcerpt>{p.excerpt}</CardExcerpt>
          </ProjectCard>
        ))}
      </PortfolioGrid>
    </PageWrapper>
  );
};

export default Portfolio;
