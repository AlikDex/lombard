import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { sanitizeHtml } from "@utils/sanitize";

export interface IFAQProps {
  title: string;
  items: { question: string; answer: string }[];
}

export function FAQ(props: IFAQProps) {
  return (
    <Box>
      <Typography variant="h6">{props.title}</Typography>
      {props.items.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id={`${index}`}
          >
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.answer) }}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
