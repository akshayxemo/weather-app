import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/es/storage/session";

import preferenceSlice from "./slices/preferenceSlice";
import authSlice from "./slices/authSlice";

const rootReducers = combineReducers({
  preference: preferenceSlice,
  auth: authSlice,
});

const persistConfig = {
  key: "root",
  storage: typeof window !== "undefined" ? storage : sessionStorage,
  whitelist: ["preference", "auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
