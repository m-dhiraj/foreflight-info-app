import store from './store';
import { removeAirport } from './airportSlice';

describe('store', () => {
  it('test to return the initial state of the airports reducer', () => {
    expect(store.getState().airports).toEqual({
      data: {},
      status: 'idle',
      error: null
    });
  });

  it('test to handle adding and then removing an airport from the state', () => {
    const airportCode = 'KAUS';
    const testData = { name: 'Austin Airport' };
  
    store.dispatch({
      type: 'airports/fetchInfo/fulfilled',
      payload: { airportData: testData, weatherData: {} },
      meta: { arg: airportCode }
    });
  
    expect(store.getState().airports.data[airportCode]).toBeDefined();
    expect(store.getState().airports.data[airportCode].airportData).toEqual(testData);
  
    // Dispatch removeAirport action
    store.dispatch(removeAirport(airportCode));
    expect(store.getState().airports.data[airportCode]).toBeUndefined();
  });

});
