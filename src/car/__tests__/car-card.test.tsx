import {render, screen} from '@testing-library/react';
import CarCard from "../car-card.tsx";
import {expect} from "vitest";

describe('Car Card', () => {
  it('should display make and model', () => {
    const car = {
      id: 1,
      make: 'Tesla',
      model: 'Model Y'
    }
    render(<CarCard car={car} />)

    expect(screen.getByRole('heading', {name: 'Tesla'})).toBeVisible()
    expect(screen.getByText('Model Y')).toBeVisible()
  });
});