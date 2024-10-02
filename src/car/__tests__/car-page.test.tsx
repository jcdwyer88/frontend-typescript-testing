import {render, screen} from '@testing-library/react';
import CarPage from "../car-page.tsx";
import {expect} from "vitest";
import * as carService from '../car-service.ts'

describe('Car Page', () => {
  it('should display car header', async () => {
    vi.spyOn(carService, 'fetchCars').mockResolvedValue([])
    render(<CarPage />)
    expect(await screen.findByRole('heading', {name: 'Cars'})).toBeVisible()
  });

  it('should call car service', async () => {
    const mockFetchCars = vi.spyOn(carService, 'fetchCars').mockResolvedValue([]);
    render(<CarPage />)
    expect(mockFetchCars).toHaveBeenCalledTimes(1)
    expect(await screen.findByRole('heading', {name: 'Cars'})).toBeVisible()
  });

  it('should display a list of cars', async () => {
    const car = { id: 1, make: 'Tesla', model: 'Model Y'};
    vi.spyOn(carService, 'fetchCars').mockResolvedValue([car])
    render(<CarPage />)
    expect(await screen.findByRole('heading', {name: car.make})).toBeVisible()
    expect(screen.getAllByRole('listitem')).toHaveLength(1)
  });
});