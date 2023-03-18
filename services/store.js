import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { seiApi } from "./api";
export const store = configureStore({
  reducer: {
    [seiApi.reducerPath]: seiApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(seiApi.middleware)
  
});

setupListeners(store.dispatch)