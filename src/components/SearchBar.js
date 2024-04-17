import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAirportInfo } from '../redux/airportSlice';
import '../styles/SearchBar.css'

const SearchBar = () => {
    // Hook to store and update the search
    const [airportCode, setAirportCode] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        // use airport code to dispatch the fetchAirportInfo action 
        if (airportCode.trim()) {
            dispatch(fetchAirportInfo(airportCode.trim()));
        }
    };
    // render the actul search bar
    return (
        <div className="search-bar-container">
            <input
            type="text"
            value={airportCode}
            onChange={(e) => setAirportCode(e.target.value.toUpperCase())}
            placeholder="Enter ICAO airport code"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
