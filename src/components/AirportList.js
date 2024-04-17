import React from 'react';
import { useSelector } from 'react-redux';
import AirportCard from './AirportCard';
import '../styles/AirportList.css';

const AirportList = () => {
    // access the redux store's state, specifically the airport data
    const airports = useSelector(state => state.airports.data);
    const airportCodes = Object.keys(airports);
    // render the airports based on their keys, or no airports if store is empty
    return (
        <div className="airport-list-container">
            {airportCodes.length > 0 ? airportCodes.map(code => (
            <AirportCard key={code} airportValue={airports[code]} airportCode={code} />
            )) : (<p className="no-airports">No airports loaded</p>)}
        </div>
    );
};

export default AirportList;
