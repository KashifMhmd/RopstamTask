import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  AuthStatus: true,
};
export const AuthCheckFunc = createSlice({
  name: 'Auth Check',
  initialState,
  reducers: {
    AuthCheck: (state, action) => {
      console.log(state, action);
      state.AuthStatus = action.payload;
    },
  },
});
export const {AuthCheck} = AuthCheckFunc.actions;
export default AuthCheckFunc.reducer;
