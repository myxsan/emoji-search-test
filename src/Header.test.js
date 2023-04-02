import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Header from "./Header";
import React from 'react';


describe("Header tests", () => {
  let header;
  beforeEach(() => {
    render(<Header />);
    header = screen.getByText("Emoji Search");
  });
  test("should Header renders properly", () => {
    expect(header).toBeInTheDocument();
  });
});
