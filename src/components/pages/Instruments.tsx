"use client";
import { ContactForm, FormFields, IFormField } from "@/components/controls/ContactForm/ContactForm";
import { useAppSelector } from "@/store/utils/useAppSelector";
import visual from "@assets/visual_instruments.png";
import { FAQ, IFAQProps } from "@components/controls/FAQ/FAQ";
import { HowToDo, IHowToDoProps } from "@components/controls/HowToDo/HowToDo";
import { IWishList, WishList } from "@components/controls/WishList/WishList";
import { Card, CardActions, CardContent, Paper, Stack, Typography } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

export function Instruments() {
  const content = useAppSelector((store) => store.texts);

  const howWeWork: IHowToDoProps = {
    title: content.pages.instruments.howWeWork.title,
    todos: content.pages.instruments.howWeWork.text,
  };

  const faq: IFAQProps = {
    title: content.pages.instruments.faq.title,
    items: content.pages.instruments.faq.text,
  };

  const formFields: FormFields = content.pages.instruments.contactForm.formFields.reduce<{
    [x: string]: IFormField;
  }>((result, current, index) => {
    result["field" + index] = {
      label: current.label,
      value: current.value || "",
      required: current.required || false,
      mask: current.mask || undefined,
      pattern: current.pattern || undefined,
    };
    return result;
  }, {});

  const whatWeSale: IWishList = {
    title: content.pages.instruments.whatWeSale.title,
    terms: content.pages.instruments.whatWeSale.text,
  };

  return (
    <Stack spacing={3}>
      <img src={visual.src} />

      <Card sx={{ bgcolor: grey[50] }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {content.pages.instruments.contactForm.title}
          </Typography>
          <Typography color="text.secondary">{content.pages.instruments.contactForm.text}</Typography>
        </CardContent>
        <CardActions>
          <ContactForm formFields={formFields} />
        </CardActions>
      </Card>
      <HowToDo todos={howWeWork.todos} title={howWeWork.title} />
      <Paper sx={{ padding: 1, bgcolor: amber[50] }}>
        <WishList title={whatWeSale.title} terms={whatWeSale.terms} />
      </Paper>
      <FAQ title={faq.title} items={faq.items} />
    </Stack>
  );
}
