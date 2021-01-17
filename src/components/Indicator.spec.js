import React from "react";
import Indicator from "./Indicator";
import { render } from "@testing-library/react";

describe('indicator', () => {
  it('should turn to green when unlock is true', () => {
    const { getByTestId } = render(<Indicator unlock={true} />);
    const indicatorClass = getByTestId("indicator").getAttribute("class");
    expect(indicatorClass).toBe("green-light");
  });
  it('should turn to red when unlock is false', () => {
    const { getByTestId } = render(<Indicator unlock={false} />);
    const indicatorClass = getByTestId("indicator").getAttribute("class");
    expect(indicatorClass).toBe("red-light");
  });
});
