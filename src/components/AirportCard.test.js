import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import AirportCard from './AirportCard';
import airportReducer from '../redux/airportSlice';
import airportData from '../data/KAUS-Info.json'; // Default data for KAUS
import weatherData from '../data/KAUS-Weather.json'; // Default weather for KAUS

const store = configureStore({
  reducer: {
    airports: airportReducer
  }
});

// Use Static values from the json files for test
const airportValue = {
  airportData: airportData,
  weatherData: weatherData
};
// Simple snapshot test to test the UI
describe('AirportCard Component', () => {
  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <AirportCard airportValue={airportValue} airportCode="KAUS" />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
