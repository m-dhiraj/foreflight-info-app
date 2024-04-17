import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchBar from './components/SearchBar';
import AirportList from './components/AirportList';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1>Airport Information App</h1>
        <p>Currently only statically queries KAUS regardless of input.</p>
        <SearchBar />
        <AirportList />
      </div>
    </Provider>
  );
};

export default App;
