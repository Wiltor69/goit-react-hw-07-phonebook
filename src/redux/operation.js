import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://650b17bddfd73d1fab0990c8.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (value, thunkAPI) => {
    try {
      const newContact = {
        id: nanoid(),
        name: value.name,
        number: value.phone,
      };

      const response = await axios.post('/contacts', newContact);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
