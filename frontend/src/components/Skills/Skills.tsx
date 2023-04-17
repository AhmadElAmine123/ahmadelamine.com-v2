import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import skillsData  from "./skills";
import {PageWrapper} from '../../components/shared/PageWrapper';
import {
  SkillsWrapper,
  AccordionWrapper,
  SkillsTitle,
  SkillsText
} from "./Skills.styles";
import Accordion from "./Accordion/Accordion";
import { useTranslation } from 'react-i18next';

const left = skillsData.filter(
  (item) =>
    item.category === "Programming Languages" || item.category === "Web Development" || item.category === "DataScience and Machine learning"
);

const right = skillsData.filter(
  (item) =>
    item.category === "DevOps" || item.category === "Application Development"
);

const Skills = () => {
  const { t, i18n } = useTranslation();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const handleAccordionClick = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <PageWrapper>
      <SkillsTitle>
      {t('skills.title')}
      </SkillsTitle>
      <SkillsText>
      {t('skills.description')}
      </SkillsText>
    <SkillsWrapper>
      <Container>
        <Row>
          <Col md={6}>
            <AccordionWrapper>
              {left.map((skillField, index) => (
                <Accordion
                  title={skillField.category}
                  key={index}
                  index={index}
                  circularOrCard={skillField.type}
                  isActive={activeAccordion === index}
                  onClick={handleAccordionClick}
                  {...skillField}
                />
              ))}
            </AccordionWrapper>
          </Col>
          <Col md={6}>
            <AccordionWrapper>
              {right.map((skillField, index) => (
                <Accordion
                  title={skillField.category}
                  key={index}
                  index={index}
                  circularOrCard={skillField.type}
                  isActive={activeAccordion === index}
                  onClick={handleAccordionClick}
                  {...skillField}
                />
              ))}
            </AccordionWrapper>
          </Col>
        </Row>
      </Container>
    </SkillsWrapper>
    </PageWrapper>
  );
};

export default Skills;
