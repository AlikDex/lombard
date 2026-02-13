"use client";
import { IConfig } from "@/utils/config/IConfig";
import { useRef } from "react";
import { Provider } from "react-redux";
import { actions as appActions } from "./slices/app";
import { actions as textActions } from "./slices/texts";

import { AppStore, makeStore } from "./store";

export default function StoreProvider({ children, config }: { children: React.ReactNode; config: IConfig }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(appActions.setAppConfig(config.app));
    storeRef.current.dispatch(textActions.setTexts(config.texts));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
