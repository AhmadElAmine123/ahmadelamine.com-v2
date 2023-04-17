import styled from "styled-components";
import { Accordion as BootstrapAccordion } from "react-bootstrap";

const primaryColor = "#29A0B1";
const secondaryColor = "#98D7C2";
const accentColor = "#DDFFE7";
const tealGreen = "#167D7F";

export const AccordionWrapper = styled(BootstrapAccordion)`
  background-color: ${primaryColor};
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &.active {
    background-color: ${tealGreen};
  }

  .accordion-header {
    background-color: inherit;
    color: #ffffff;
    cursor: pointer;
    padding: 1rem;
    font-weight: 600;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;

    &:hover {
      background-color: ${secondaryColor};
    }
  }

  .accordion-collapse {
    background-color: ${accentColor};
    border-radius: 0 0 5px 5px;
  }

  .accordion-body {
    padding: 1rem;
    color: ${tealGreen};
  }
`;
export const AccordionItem = styled(BootstrapAccordion.Item)<{ circularOrCard: string }>`
background-color: ${primaryColor};
border: none;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

&.active {
  background-color: ${tealGreen};
}

.accordion-header {
  background-color: inherit;
  color: #ffffff;
  cursor: pointer;
  padding: 1rem;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${secondaryColor};
  }
}

.accordion-collapse {
  background-color: ${accentColor};
  border-radius: 0 0 5px 5px;
}

.accordion-body {
  padding: 1rem;
  color: ${tealGreen};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
  ${props => props.circularOrCard === "circular" && `
    // Styles for circular elements
  `}
  
  ${props => props.circularorcard === "card" && `
    // Styles for bar elements
    flex-direction: column;
    align-items: left;
    justify-content: left;
  `}
`;
