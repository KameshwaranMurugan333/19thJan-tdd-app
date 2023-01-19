import { render, fireEvent, screen } from "@testing-library/react";
import { Counter } from "..";

// Check the initial value is 0 or not
test('Check the counter is initialized', () => {
    render(<Counter />)

    // Checking the count is initialized
    const counter = screen.getByTestId("counter");

    // Assert the expected result
    expect(counter).toHaveTextContent("0");
});

// Checking increment function is working or not
test("check increment functionality", ()=> {
    // Render the component on virtual DOM
    render(<Counter />)

    // Checking the count is initialized
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("incrementBtn");

    // Performing Click Action
    fireEvent.click(incrementBtn);

    // Assert the expected result
    expect(counter).toHaveTextContent("1")
});

// Checking decrement functionality is working or not
test("check decrement functionality", () => {
    // Rende the component on virtual DOM
    render(<Counter />)

    // Checking the count is initialized
    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByTestId("decrementBtn");
    const incrementBtn = screen.getByTestId("incrementBtn");

    // Performing the click action
    fireEvent.click(incrementBtn); // 1
    fireEvent.click(decrementBtn); // 0
    fireEvent.click(decrementBtn); // -1
    fireEvent.click(decrementBtn); // -2

    expect(counter).toHaveTextContent("-2")
})



