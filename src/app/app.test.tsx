import { render } from "@testing-library/react";
import React from "react";
import { App } from ".";

test("renders app", () => {
    const { getByText } = render(<App />);
    const placeElement = getByText(/Generate/i);
    expect(placeElement).toBeInTheDocument();
});
