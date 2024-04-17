import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import airportData from '../data/KAUS-Info.json'; // Default data for KAUS
import weatherData from '../data/KAUS-Weather.json'; // Default weather for KAUS

/* Supposed to call the foreflight api to get airport/weather information
   but currently uses static information from provided json files
*/ 
export const fetchAirportInfo = createAsyncThunk(
    'airports/fetchInfo',
    async (airportCode, { rejectWithValue }) => {
      try {
        // const airportResponse = await fetch(`https://qa.foreflight.com/airports/${airportCode.toLowerCase()}`);
        // const weatherResponse = await fetch(`https://qa.foreflight.com/weather/report/${airportCode.toUpperCase()}`);
  
        // if (!airportResponse.ok) {
        //   throw new Error('Failed to fetch airport data');
        // }
        // if (!weatherResponse.ok) {
        //   throw new Error('Failed to fetch weather data');
        // }
  
        // const airportData = await airportResponse.json();
        // const weatherData = await weatherResponse.json();
        
        return {
          airportData: airportData,
          weatherData: weatherData
        };
      } catch (error) {
        return rejectWithValue(error.toString());
      }
    }
  );

/* Slice definition with reducer logic and configuration
*/
const airportSlice = createSlice({
  name: 'airports',
  // Initial state of slice
  initialState: {
    data: {},
    status: 'idle',
    error: null
  },
  // Added a reducer to directly remove airport by its code
  reducers: {
    removeAirport: (state, action) => {
        delete state.data[action.payload];
      }
  },
  // Handle external async actions 
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirportInfo.pending, (state) => {
        state.status = 'loading';
      })
      // Our sucessful case where we store airport data under its code
      .addCase(fetchAirportInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data[action.meta.arg] = action.payload;
        //console.log('State Snapshot:', JSON.parse(JSON.stringify(state.data)));
      })
      .addCase(fetchAirportInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});
export const { removeAirport } = airportSlice.actions;
export default airportSlice.reducer;
