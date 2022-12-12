import ageReducer from './ageSlice';
import cashReducer from './cashSlice';
import possessionsReducer from './possessionsSlice';
import { createSlice, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        age: ageReducer,
        cash: cashReducer,
        possessions: possessionsReducer,
      },
});
