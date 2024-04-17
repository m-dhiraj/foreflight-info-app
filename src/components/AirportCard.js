import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAirport } from '../redux/airportSlice';
import { celsiusToFahrenheit, knotsToMPH, getWindDirection, getCloudCoverageDescription, calculateTimeOffset } from '../functions/helperFunctions';
import '../styles/AirportCard.css';

const AirportCard = ({ airportValue, airportCode }) => {
    // Handle removing airport by using removeAirport reducer
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeAirport(airportCode));
    };
    // Only access the relevant data from the passed prop
    const airport = airportValue.airportData;
    const weather = airportValue.weatherData.report.conditions;
    const forecastConditions = airportValue.weatherData.report.forecast.conditions;
    const relevantConditions = forecastConditions.slice(1, 3);
    // Use imported helper functions to convert raw values to usable outputs
    const tempInFahrenheit = celsiusToFahrenheit(weather.tempC);
    const windSpeedMPH = knotsToMPH(weather.wind.speedKts);
    const windDirection = getWindDirection(weather.wind.direction);
    const cloudCoverage = getCloudCoverageDescription(weather.cloudLayers[0].coverage); 

    // Correctly load the component with the appropriate airport values
    return (
        <div className="airport-card">
            <h1>{airport.icao}</h1>
            <h2>{airport.name}</h2>
            <p>{airport.city}, {airport.state}</p>
            <p>Available Runways:</p>
            <ul>
            {airport.runways.map(runway => (
                <li key={runway.ident}>{runway.ident} - Length: {runway.length} feet</li>
            ))}
            </ul>
            <p>Latitude: {airport.latitude}</p>
            <p>Longitude: {airport.longitude}</p>
            <h2>Current Weather</h2>
            <p>Temperature: {tempInFahrenheit.toFixed(1)} F</p>
            <p>Relative Humidity: {weather.relativeHumidity}%</p>
            <p>Cloud Coverage: {cloudCoverage}</p>
            <p>Visibility: {weather.visibility.prevailingVisSm} miles</p>
            <p>Wind: {windSpeedMPH.toFixed(1)} MPH at {windDirection} degrees</p>
            <h2>Forecast</h2>
            {relevantConditions.map((entry, index) => (
            <div key={index} className="forecast-card">
                <h3>{calculateTimeOffset('2024-02-29T08:00:00', entry.period.dateStart)}</h3>
                <p>Wind Speed: {entry.wind ? knotsToMPH(entry.wind.speedKts).toFixed(1) : 'N/A'} MPH</p>
                <p>Wind Direction: {entry.wind.direction}&deg;</p>
            </div>
            ))}
            <button className="remove-button" onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default AirportCard;
