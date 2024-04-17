import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import airportReducer from '../redux/airportSlice';
import SearchBar from './SearchBar';

const store = configureStore({
  reducer: {
    airports: airportReducer
  }
});

describe('SearchBar Component', () => {
  it('renders correctly and matches the snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
