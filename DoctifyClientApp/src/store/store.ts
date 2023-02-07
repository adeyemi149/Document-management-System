import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import docsSlice from "../features/docsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    doc: docsSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
