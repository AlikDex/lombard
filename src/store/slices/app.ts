import { IAppConfig } from "@/utils/config/IConfig";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAppConfig = {
  contactPhone: "",
  // telegram: {
  //   TELEGRAM_BOT_TOKEN: "",
  //   TELEGRAM_CHAT_ID: "",
  // },
  // email: {
  //   SMTP_HOST: "",
  //   SMTP_PORT: 0,
  //   SMTP_SECURE: false,
  //   email: "",
  //   SMTP_PASS: "",
  //   SMTP_USER: "",
  // },
};

export const appConfigSlice = createSlice({
  name: "appConfig",
  initialState,
  reducers: {
    setAppConfig: (state, action: PayloadAction<IAppConfig>) => {
      state.contactPhone = action.payload.contactPhone;
      // state.telegram = action.payload.telegram;
      // state.email = action.payload.email;
    },
  },
});

export const actions = appConfigSlice.actions;
