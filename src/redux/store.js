import { configureStore } from '@reduxjs/toolkit';
import airportReducer from './airportSlice'; 
/* Create Redux Store to use for the Airport Reducer
*/
const store = configureStore({
  reducer: {
    airports: airportReducer
  },
});

export default store;
