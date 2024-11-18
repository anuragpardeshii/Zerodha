import React from "react";
import {render, screen } from "@testing-liabrar/react";
import '@testing-library/jest-dom/extend-expect';
import Hero from "../src/landing_page/home/Hero";

//Tese Suite
decribe('Hero Component', () => {
    test("renders hero image", () => {
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAtteibute('src', 'media/Images/homeHero.png');

    });
});