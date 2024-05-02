import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars } from '../services/cars-api';

export const apiGetCars = createAsyncThunk(
  'cars/apiGetCars',
  async (_, thankApi) => {
    try {
      const { data } = await getAllCars();

      return data;
    } catch (error) {
      console.log(error);
      return thankApi.rejectWithValue(error.message);
    }
  }
);
