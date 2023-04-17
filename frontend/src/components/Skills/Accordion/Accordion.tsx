import React from "react";
import { AccordionWrapper,AccordionItem } from "./Accordion.styles";
import { AccordionButton, AccordionCollapse } from "react-bootstrap";

import CircularProgress from "../CircularProgress/CircularProgress";
import SkillBar from "../SkillBar/SkillBar";

interface AccordionProps {
  title: string;
  skills: Array<any>; // Replace with appropriate type
  index: number;
  circularOrCard:string;
  type: string;
  isActive: boolean;
  onClick: (index: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, skills,circularOrCard, index, isActive, onClick }) => {
  const handleAccordionClick = () => {
    onClick(index);
  };
  
  return (
    <AccordionWrapper className={isActive ? "active" : ""} defaultActiveKey={isActive ? "0" : undefined}>
      <AccordionItem eventKey={""+index}  circularorcard={circularOrCard}>
      <AccordionButton className="accordion-header" onClick={handleAccordionClick}>
        {title}
      </AccordionButton>
      <AccordionCollapse eventKey={""+index}>
        <div className="accordion-body">
          {skills.map((skill, i) => (
            
            <div key={i}>
              {circularOrCard === "circular" ? (
                <CircularProgress skill={skill} animate = {isActive}/>
              ) : (
                <SkillBar skill={skill} animate = {isActive} />
              )}
            </div>
          ))}
        </div>
      </AccordionCollapse>

      </AccordionItem>
    </AccordionWrapper>
  );
};

export default Accordion;
