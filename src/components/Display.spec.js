import React from "react";
import Display from "./Display";
import { render } from "@testing-library/react";

describe("display", () => {
  it("should display 0000 when PIN entered is 0000", () => {
    const { getByTestId } = render(<Display pin="0000" />);
    const display = getByTestId("pin-display").innerHTML;
    expect(display).toBe("0000");
  });
});
