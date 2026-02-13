import { IFormField } from "@/components/controls/ContactForm/ContactForm";

export interface IConfig {
  app: IAppConfig;
  texts: ITextsConfig;
}

export interface IAppConfig {
  contactPhone: string;
  // telegram: ITelegramConfig;
  // email: IEmailConfig;
}

export interface IPageText {
  title: string;
  description: string;
  contactForm: {
    title: string;
    text: string;
    formFields: IFormField[];
  };
  howWeWork: {
    title: string;
    text: string[];
  };
  whatWeSale: {
    title: string;
    text: string[];
  };
  faq: {
    title: string;
    text: {
      question: string;
      answer: string;
    }[];
  };
}

export interface ITextsConfig {
  common: {
    contactPhone: string;
    email: string;
  };
  pages: {
    equipment: IPageText;
    cars: IPageText;
    phones: IPageText;
    realty: IPageText;
    instruments: IPageText;
  };
}
