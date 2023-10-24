import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = '/api/v1/greetings/random';

export const getRandomGreeting = createAsyncThunk(
  'greetings/getRandomGreeting',
  async (thunkAPI) => {
    try {
      const response = await axios.get(apiEndpoint);
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  greetings: [],
  isLoading: false,
  error: null,
};
