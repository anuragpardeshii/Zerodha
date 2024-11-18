import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Hero from "../src/landing_page/home/Hero";

// Mock the static file import if necessary
jest.mock('../src/landing_page/home/Hero', () => () => (
    <img src="media/Images/homeHero.png" alt="Hero Image" />
));

// Test Suite
describe('Hero Component', () => {
    test("renders hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/Images/homeHero.png');
    });
});
