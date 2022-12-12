import { createSlice, configureStore } from "@reduxjs/toolkit";

export const cashSlice = createSlice({
    name: 'state',
    initialState: 0,
    reducers: {
        receivedPaycheck(state, action) {
            return state + action.payload;
          },
          paidBill(state, action) {
            return state - action.payload;
          },
    }
});

export default cashSlice.reducer;
