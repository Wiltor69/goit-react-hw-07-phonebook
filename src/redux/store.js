import { configureStore } from '@reduxjs/toolkit';
import { contactReduce } from './contactSlice';
import { filterReduce } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReduce,
    filter: filterReduce,
  },
});
