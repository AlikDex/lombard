import React, { useMemo } from 'react';
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { sanitizeHtml } from "@utils/sanitize";

// 1. Описываем типы данных
export interface IFAQItem {
  question: string;
  answer: string;
}

export interface IFAQProps {
  title: string;
  items: IFAQItem[];
}

// 2. Выносим отдельный элемент в компонент.
// Теперь useMemo внутри него будет работать законно для каждого айтема.
const FAQItem = ({ item, index }: { item: IFAQItem; index: number }) => {
  const panelId = `faq-ch-${index}`;

  // Теперь useMemo на своем месте — в корне функционального компонента
  const sanitizedAnswer = useMemo(() =>
      sanitizeHtml(item.answer),
    [item.answer]
  );

  return (
    <Accordion disableGutters elevation={0} sx={{ '&:before': { display: 'none' } }}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`${panelId}-content`}
        id={`${panelId}-header`}
      >
        <Typography sx={{ fontWeight: 600 }}>{item.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          className="faq-content"
          dangerouslySetInnerHTML={{ __html: sanitizedAnswer }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

// 3. Основной компонент
const FAQ: React.FC<IFAQProps> = ({ title, items }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      {items.map((item, index) => (
        <FAQItem
          key={item.question} // Используй уникальный ID, если есть
          item={item}
          index={index}
        />
      ))}
    </Box>
  );
};

export default FAQ;
