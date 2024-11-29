import { configureStore } from "@reduxjs/toolkit";


import favoriteReducer from "../redux/store";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer,
  },
});
