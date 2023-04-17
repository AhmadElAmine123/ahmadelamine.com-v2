import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

const Portfolio = () => {
  const [filter, setFilter] = useState<string>('all');
  const { t, i18n } = useTranslation();
  let projects = t('projects', { returnObjects: true }) as Array<any>;
  let projectTypes = t('projectTypes', { returnObjects: true }) as Array<any>;

  const filteredProjects = () => {
    if (filter === 'all') {
      return projects;
    }
    return projects.filter((p) => p.projectType === filter);
  };

  return (
    <>
      <Header>
        <Title>{t('portfolio.title')}</Title>
      </Header>
      <Filter>
        <FilterButton onClick={() => setFilter('all')}>{t('allProjects')}</FilterButton>
        {projectTypes.map((type: any, index: number) => (
          <FilterButton key={index} onClick={() => setFilter(type.TypeName)}>
            {type.TypeName}
          </FilterButton>
        ))}
      </Filter>
      <PortfolioGrid>
        {filteredProjects().map((p: any, index: number) => (
          <ProjectCard key={index}>
            <CardImage src={p.featuredImageURL} alt={p.projectName} />
            <CardTitle>{p.projectName}</CardTitle>
            <CardExcerpt>{p.excerpt}</CardExcerpt>
          </ProjectCard>
        ))}
      </PortfolioGrid>
    </>
  );
};

export default Portfolio;
