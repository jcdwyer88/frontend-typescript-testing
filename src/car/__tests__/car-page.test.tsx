import {render, screen} from '@testing-library/react';
import CarPage from "../car-page.tsx";
import {expect} from "vitest";
import * as carService from '../car-service.ts'

describe('Car Page', () => {
  it('should display car header', () => {
    vi.spyOn(carService, 'fetchCars').mockResolvedValue([])
    render(<CarPage />)
    expect(screen.getByRole('heading', {name: 'Cars'})).toBeVisible()
  });

  it('should call car service', () => {
    const mockFetchCars = vi.spyOn(carService, 'fetchCars').mockResolvedValue([]);
    render(<CarPage />)
    expect(mockFetchCars).toHaveBeenCalledTimes(1)
  });
});