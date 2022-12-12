import { createSlice, configureStore } from "@reduxjs/toolkit";

export const ageSlice = createSlice({
    name: 'state',
    initialState: 0,
    reducers: {
        hadBirthday(state) {
            return state + 1;
          },
    }
});

export default ageSlice.reducer;
