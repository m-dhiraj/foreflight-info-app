import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

// Mock a Store
const mockStore = configureStore([]);
const store = mockStore({
});

describe('App Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  // test the title
  test('renders the app title', () => {
    const titleElement = screen.getByText(/Airport Information App/i);
    expect(titleElement).toBeInTheDocument();
  });
  // test the subtitle
  test('renders the current query notice', () => {
    const noticeElement = screen.getByText(/Currently only statically queries KAUS regardless of input/i);
    expect(noticeElement).toBeInTheDocument();
  });
  // test to see the SearchBar is rendered
  test('renders the SearchBar component', () => {
    expect(screen.getByPlaceholderText(/Enter ICAO airport code/i)).toBeInTheDocument();
  });
  // test to see AirportList is rendered
  test('renders the AirportList component', () => {
    const listElement = screen.getByText(/No airports loaded/i);
    expect(listElement).toBeInTheDocument();
  });
});
