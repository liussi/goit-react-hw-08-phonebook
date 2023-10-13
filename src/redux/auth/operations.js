import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/regester',
  async (credentials, thunckAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials)
      setAuthHeader(response.data.token);
      return response.data;

    } catch (error) {
      return thunckAPI.rejectWithValue(error.message)
    }
  }
)