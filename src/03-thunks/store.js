import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBalloonsAsync = createAsyncThunk('fetchBalloons', async () => {
    const res = await axios.get('/balloons');
    return res.data;
});

export const addBalloonAsync = createAsyncThunk('addBalloon', async (color) => {
    const res = await axios.post('/balloons', { color });
    return res.data;
});

export const balloonsSlice = createSlice({
  name: 'balloons',
  initialState: {
    balloons: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBalloonsAsync.fulfilled, (state, action) => {
      state.balloons = action.payload;
    }),
    builder.addCase(addBalloonAsync.fulfilled, (state, action) => {
      state.balloons.push(action.payload);
    }),
    builder.addCase(fetchBalloonsAsync.rejected, (state, action) => {
      state.error = action.error;
    })
  }
});

export const store = configureStore({
  reducer: {
    balloons: balloonsSlice.reducer,
  },
});
