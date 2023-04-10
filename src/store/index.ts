/* eslint-disable @typescript-eslint/no-restricted-imports */
import { configureStore, isPlain } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PERSIST } from "redux-persist";
import { persistedReducer, RootState } from "./reducers";

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: {
        isSerializable: (value: unknown) =>
          isPlain(value) || typeof value === "bigint",
        ignoredActions: [PERSIST],
      },
      immutableCheck: false,
    }),
});

type AppDispatch = typeof store.dispatch;

const developmentDispatch: () => AppDispatch = useDispatch;
const developmentSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = developmentDispatch;
export const useAppSelector = developmentSelector;
