import {render, screen} from "@testing-library/react";
import CarPage from "../CarPage.tsx";
import * as CarClient from '../CarClient.ts';
import {Car} from "../types.ts";
import {expect} from "vitest";

describe('Car Page tests', () => {
    it('should show the Car Page Header', async () => {
        vi.spyOn(CarClient, 'fetchCars').mockResolvedValue([]);

        render(<CarPage />);

        expect(await screen.findByRole('heading', {name: 'Cars'})).toBeVisible();
    });

    it('should call the fetchCars Service one time', async () => {
        const carClientSpy = vi.spyOn(CarClient, 'fetchCars').mockResolvedValue([]);

        render(<CarPage />);

        expect(carClientSpy).toBeCalledTimes(1);
        expect(await screen.findByRole('heading', {name: 'Cars'})).toBeVisible();
    });

    it('should return a list of cards from the car service', async () => {
        const expectedCar: Car = {
            make: 'Ford',
            model: 'Ranger'
        }
        vi.spyOn(CarClient, 'fetchCars').mockResolvedValue([expectedCar]);

        render(<CarPage />);

        expect(await screen.findByRole('heading', {name: 'Ford'})).toBeVisible();
    });
});