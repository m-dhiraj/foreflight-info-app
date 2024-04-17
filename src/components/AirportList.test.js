import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import AirportList from './AirportList';

// Mock the use Selector and AirportCard 
jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));
jest.mock('./AirportCard', () => (props) => (
  <div data-testid="airport-card">{props.airportCode}</div>
));

describe('AirportList Component', () => {
  it('should display "No airports loaded" when there are no airports', () => {
    useSelector.mockReturnValue({});
    render(<AirportList />);
    expect(screen.getByText('No airports loaded')).toBeInTheDocument();
  });

  it('should render AirportCard components for each airport', () => {
    useSelector.mockReturnValue({
      'KAUS': { name: 'Austin Airport' },
      'IAH': { name: 'Houston Airport' }
    });
    render(<AirportList />);
    const airportCards = screen.getAllByTestId('airport-card');
    expect(airportCards.length).toBe(2);
    expect(airportCards[0]).toHaveTextContent('KAUS');
    expect(airportCards[1]).toHaveTextContent('IAH');
  });
});
