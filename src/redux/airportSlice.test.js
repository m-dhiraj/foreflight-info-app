import { configureStore } from '@reduxjs/toolkit';
import airportReducer, { fetchAirportInfo, removeAirport } from './airportSlice';
import airportData from '../data/KAUS-Info.json';
import weatherData from '../data/KAUS-Weather.json';

// Create a mock store for the tests
const store = configureStore({
    reducer: {
        airports: airportReducer
    }
});

describe('airportSlice', () => {
    
    it('should handle initial state', () => {
        expect(store.getState().airports).toEqual({
            data: {},
            status: 'idle',
            error: null
        });
    });

    it('should handle fetchAirportInfo pending', () => {
        store.dispatch(fetchAirportInfo.pending());
        expect(store.getState().airports.status).toEqual('loading');
    });

    describe('fetchAirportInfo fulfilled', () => {
        beforeEach(() => {
            const mockPayload = {
            airportData: airportData,
            weatherData: weatherData
            };
            const action = { type: fetchAirportInfo.fulfilled.type, payload: mockPayload, meta: { arg: 'KAUS' } };
            store.dispatch(action);
        });

        it('should store airport and weather data', () => {
            const state = store.getState().airports;
            expect(state.data['KAUS']).toEqual({
            airportData: airportData,
            weatherData: weatherData
            });
        });

        it('should set status to succeeded', () => {
                expect(store.getState().airports.status).toEqual('succeeded');
        });
    });

    it('should handle removeAirport', () => {
        store.dispatch(removeAirport('KAUS'));
        expect(store.getState().airports.data['KAUS']).toBeUndefined();
    });
});
