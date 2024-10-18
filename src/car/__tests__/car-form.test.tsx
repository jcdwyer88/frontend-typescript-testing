import {beforeEach, describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import CarForm from "../car-form.tsx";
import {userEvent} from "@testing-library/user-event";
import * as carService from '../car-service.ts';

describe('Car Form', () => {

    describe('Viewing form inputs', () => {

        beforeEach(() => {
            render(<CarForm/>)
        })

        it('should show the form title', () => {
            expect(screen.getByRole('heading', {name: /new car submission/i})).toBeVisible()
        })

        it('should have a form description', () => {
            expect(screen.getByText(/this is where you submit your new car data/i)).toBeVisible()
        })

        it('should show Make input field', () => {
            expect(screen.getByRole('textbox', {name: /make/i})).toBeVisible()
        })

        it('should show Model input field', () => {
            expect(screen.getByRole('textbox', {name: /model/i})).toBeVisible()
        })

        it('should show Color input field', () => {
            expect(screen.getByRole('textbox', {name: /color/i})).toBeVisible()
        })

        it('should show Seats input field', () => {
            expect(screen.getByRole('number', {name: /seats/i})).toBeVisible()
        })

        it('should show car Type input field', () => {
            expect(screen.getByRole('textbox', {name: /type/i})).toBeVisible()
        })

        it('should have a submit button', () => {
            expect(screen.getByRole('button', {name: /submit/i})).toBeVisible()
        })
    })

    describe('Form Submission', () => {

        it('should submit with Make data', async () => {
            // arrange
            const saveCarSpy = vi.spyOn(carService, 'saveCar')
                .mockResolvedValue({id: 1, make: 'Tesla', model: 'Model 3', color: 'blue', type: 'sedan', seats: 5})
            const user = userEvent.setup()
            render(<CarForm/>)

            // act
            screen.logTestingPlaygroundURL()
            await user.type(screen.getByRole('textbox', {name: /make/i}), 'Tesla')
            await user.type(screen.getByRole('textbox', {name: /model/i}), 'Model 3')
            await user.type(screen.getByRole('textbox', {name: /color/i}), 'blue')
            await user.type(screen.getByRole('spinbutton', {name: /seats/i}), '5')
            await user.type(screen.getByRole('textbox', {name: /type/i}), 'sedan')
            await user.click(screen.getByRole('button', {name: /submit/i}))

            // assert
            expect(saveCarSpy).toHaveBeenCalledWith({make: 'Tesla', model: 'Model 3', color: 'blue', seats: 5, type: 'sedan'})

        })
    })
})