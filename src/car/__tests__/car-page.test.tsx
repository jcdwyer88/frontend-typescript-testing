import {render, screen} from '@testing-library/react';
import CarPage from "../car-page.tsx";
import {expect} from "vitest";

describe('Car Page', () => {
  it('should display car header', () => {
    render(<CarPage />)
    expect(screen.getByRole('heading', {name: 'Cars'})).toBeVisible()
  });
});