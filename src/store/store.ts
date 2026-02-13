import { configureStore } from "@reduxjs/toolkit";
import { appConfigSlice } from "./slices/app";
import { textsSlice } from "./slices/texts";

export const makeStore = () => {
  return configureStore({
    reducer: {
      texts: textsSlice.reducer,
      app: appConfigSlice.reducer,
    },
  });
};

// export type TRootState = ReturnType<typeof store.getState>;
// export type TAppDispatch = typeof store.dispatch;

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<AppStore["getState"]>;
export type TAppDispatch = AppStore["dispatch"];
