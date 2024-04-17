import { celsiusToFahrenheit, knotsToMPH, getWindDirection, getCloudCoverageDescription, calculateTimeOffset } from './helperFunctions'; 
describe('Utility Functions', () => {
  test('celsiusToFahrenheit converts Celsius to Fahrenheit correctly', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit(100)).toBe(212);
  });

  test('knotsToMPH converts knots to miles per hour correctly', () => {
    expect(knotsToMPH(1)).toBeCloseTo(1.15078);
  });

  test('getWindDirection converts degrees to cardinal direction correctly', () => {
    expect(getWindDirection(0)).toBe('N');
    expect(getWindDirection(23)).toBe('NNE');
    expect(getWindDirection(90)).toBe('E');
    expect(getWindDirection(360)).toBe('N');
  });

  test('getCloudCoverageDescription converts cloud coverage code to readable sentence', () => {
    expect(getCloudCoverageDescription('FEW')).toBe('There are a Few Clouds');
    expect(getCloudCoverageDescription('SCT')).toBe('The Clouds are Scattered');
    expect(getCloudCoverageDescription('XXX')).toBe('Unknown');
  });

  test('calculateTimeOffset calculates the time offset between two dates correctly', () => {
    const start = '2023-01-01T00:00:00Z';
    const end = '2023-01-01T03:30:00Z';
    expect(calculateTimeOffset(start, end)).toBe('03:30');
  });
});
