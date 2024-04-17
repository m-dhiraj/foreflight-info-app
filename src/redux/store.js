import { configureStore } from '@reduxjs/toolkit';
import airportReducer from './airportSlice'; // This is your reducer
/* Create Redux Store to use for the Airport Reducer
*/
const store = configureStore({
  reducer: {
    airports: airportReducer
  },
});

export default store;
