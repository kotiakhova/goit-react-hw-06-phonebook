import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebookReducer";

const store = configureStore({
  reducer: { phonebookReducer },
});

export default store;
