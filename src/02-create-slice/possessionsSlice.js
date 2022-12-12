import { createSlice, configureStore } from "@reduxjs/toolkit";

export const possessionsSlice = createSlice({
    name: 'state',
    initialState: [],
    reducers: {
        receivedGift(state, action) {
            state.push(action.payload);
          },
    }
});

export default possessionsSlice.reducer;
