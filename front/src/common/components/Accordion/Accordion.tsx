import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IAccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FunctionComponent<IAccordionProps> = ({ children }) => {
  return (
    <MuiAccordion defaultExpanded>
      <MuiAccordionSummary
        id="panel-header"
        aria-controls="panel-content"
        expandIcon={<ExpandMoreIcon />}
      >
        Header
      </MuiAccordionSummary>
      <MuiAccordionDetails>{children}</MuiAccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
