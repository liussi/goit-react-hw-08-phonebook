import { register } from './operations';

const { createSlice } = require('@reduxjs/toolkit');
export const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
export const authSlise = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
})
      .addCase(register.rejected, (state, action) => state);
  },
});

export const authReduser = authSlise.reducer;
