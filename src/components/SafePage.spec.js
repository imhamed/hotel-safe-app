import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import SafePage from "./SafePage";

afterEach(cleanup);

describe("keyboard", () => {
  describe("CTL button", () => {
    it("should clear the display when CTL button is pressed", () => {
      const { getByTestId } = render(<SafePage />);
      fireEvent.click(getByTestId("btn-clr"));
      const display = getByTestId("pin-display").innerHTML;
      expect(display).toBe("");
    });
  });

  describe("num button", () => {
    it("should display 3 when button 3 is pressed", () => {
      const { getByTestId } = render(<SafePage />);
      fireEvent.click(getByTestId("btn-3"));
      const display = getByTestId("pin-display").innerHTML;
      expect(display).toMatch(/3/);
    });
  });

  describe("sequence of 2 num buttons", () => {
    it("should display 35 when button 3 and 5 are pressed", () => {
      const { getByTestId } = render(<SafePage />);
      fireEvent.click(getByTestId("btn-3"));
      fireEvent.click(getByTestId("btn-5"));
      const display = getByTestId("pin-display").innerHTML;
      expect(display).toMatch(/35/);
    });
  });

  describe("pressing buttons is limited to 4 digits", () => {
    it("should display 3333 although button 3 is pressed 5 times", () => {
      const { getByTestId } = render(<SafePage />);
      fireEvent.click(getByTestId("btn-3"));
      fireEvent.click(getByTestId("btn-3"));
      fireEvent.click(getByTestId("btn-3"));
      fireEvent.click(getByTestId("btn-3"));
      fireEvent.click(getByTestId("btn-3"));
      const display = getByTestId("pin-display").innerHTML;
      expect(display).toBe("3333");
    });
  });
});
