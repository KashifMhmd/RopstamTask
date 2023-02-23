import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  carData: [],
};
export const carDataCollector = createSlice({
  name: 'Car Data',
  initialState,
  reducers: {
    carDataReducer: (state, action) => {
      console.log(state, action);
      state.carData = action.payload;
    },
  },
});
export const {carDataReducer} = carDataCollector.actions;
export default carDataCollector.reducer;
