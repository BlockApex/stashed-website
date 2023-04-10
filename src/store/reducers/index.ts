import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import AppReducer from "../slices/appSlice";

const storage = require("redux-persist/lib/storage").default;

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["app"],
};
const reducers = combineReducers({
  app: AppReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducers);



export type RootState = ReturnType<typeof reducers>;
