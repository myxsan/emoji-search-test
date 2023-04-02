import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import React from "react";
import App from "./App";

let containerDOM, input;
beforeEach(() => {
  const { container } = render(<App />);
  containerDOM = container;
  input = screen.getByLabelText("input");
});

test("should filter properly", () => {
  const filterText = "smi";
  userEvent.type(input, filterText);
  const elements = screen.findAllByRole("component-emoji-result-row");
  Array.from(elements).forEach((element) =>
    expect(element.textContent.toLowerCase().includes(filterText)).toBe(true)
  );
});

test("should copy when a row clicked", async () => {
  const testEmoji = '💯';
  const element = await containerDOM.getElementsByClassName('component-emoji-result-row')[0]; // Wait for the element to appear
  userEvent.click(element);
  userEvent.paste(input);
  expect(input).toHaveValue(testEmoji);
});

