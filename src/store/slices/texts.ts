import { ITextsConfig } from "@/utils/config/IConfig";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ITextsConfig = {
  common: {
    contactPhone: "",
    email: "",
  },
  pages: {
    equipment: {
      title: "",
      description: "",
      contactForm: {
        title: "",
        text: "",
        formFields: [],
      },
      howWeWork: {
        title: "",
        text: [],
      },
      whatWeSale: {
        title: "",
        text: [],
      },
      faq: {
        title: "",
        text: [],
      },
    },
    cars: {
      title: "",
      description: "",
      contactForm: {
        title: "",
        text: "",
        formFields: [],
      },
      howWeWork: {
        title: "",
        text: [],
      },
      whatWeSale: {
        title: "",
        text: [],
      },
      faq: {
        title: "",
        text: [],
      },
    },
    instruments: {
      title: "",
      description: "",
      contactForm: {
        title: "",
        text: "",
        formFields: [],
      },
      howWeWork: {
        title: "",
        text: [],
      },
      whatWeSale: {
        title: "",
        text: [],
      },
      faq: {
        title: "",
        text: [],
      },
    },
    realty: {
      title: "",
      description: "",
      contactForm: {
        title: "",
        text: "",
        formFields: [],
      },
      howWeWork: {
        title: "",
        text: [],
      },
      whatWeSale: {
        title: "",
        text: [],
      },
      faq: {
        title: "",
        text: [],
      },
    },
    phones: {
      title: "",
      description: "",
      contactForm: {
        title: "",
        text: "",
        formFields: [],
      },
      howWeWork: {
        title: "",
        text: [],
      },
      whatWeSale: {
        title: "",
        text: [],
      },
      faq: {
        title: "",
        text: [],
      },
    },
  },
};

export const textsSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {
    setTexts: (state, action: PayloadAction<ITextsConfig>) => {
      state.common = action.payload.common;
      state.pages = action.payload.pages;
    },
  },
});

export const actions = textsSlice.actions;
