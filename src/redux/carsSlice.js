import { createSlice } from '@reduxjs/toolkit';
import { apiGetCars } from './operations';
import { statusState } from './constants';

const initialState = {
  cars: [],
  currentCar: null,
  favoriteCars: [],
  status: statusState.idle,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCurrentCar: (state, { payload }) => {
      state.currentCar = payload;
    },
    addFavoriteCar: (state, { payload }) => {
      state.favoriteCars.push(payload);
    },
    deleteFavoriteCar: (state, { payload }) => {
      console.log(state, payload);
    },
  },
  extraReducers: (builder) =>
    builder
      // ============= GET All Cars ===============
      .addCase(apiGetCars.pending, (state) => {
        state.status = statusState.pending;
        state.error = null;
        state.currentCar = null;
      })
      .addCase(apiGetCars.fulfilled, (state, { payload }) => {
        state.status = statusState.success;
        state.error = null;
        state.cars = payload;
      })
      .addCase(apiGetCars.rejected, (state, { payload }) => {
        state.status = statusState.error;
        state.error = payload;
      }),
});
export const { setCurrentCar, addFavoriteCar, deleteFavoriteCar } =
  carsSlice.actions;

export const carsReducer = carsSlice.reducer;
