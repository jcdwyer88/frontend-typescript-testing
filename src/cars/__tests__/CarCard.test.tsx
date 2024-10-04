import {render, screen} from "@testing-library/react";
import CarCard from "../CarCard.tsx";
import {expect} from "vitest";
import {Car} from "../types.ts";

describe('Car card test', () => {

    it('should show the car header', () => {
        const expectedCar: Car = {
            id: 1,
            make: 'Tesla',
            model: 'Model Y'
        }
        render(<CarCard car={expectedCar} />);
        expect(screen.getByRole('heading', {name: 'Tesla'})).toBeVisible()
    });

    it('should show the car model', () => {
        const expectedCar: Car = {
            id: 1,
            make: 'Tesla',
            model: 'Model Y'
        }
        render(<CarCard car={expectedCar} /> );
        expect(screen.getByText('Model Y'));
    });

    it('should display the make and model of the car passed in', () => {
        const expectedCar: Car = {
            id: 1,
            make: 'Tesla',
            model: 'Model Y'
        }

        render(<CarCard car={expectedCar} />)
        expect(screen.getByRole('heading', {name: expectedCar.make})).toBeVisible();
        expect(screen.getByText(expectedCar.model)).toBeVisible();
    });
});