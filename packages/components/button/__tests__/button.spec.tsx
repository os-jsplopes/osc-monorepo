import React from "react";
import { render } from "@testing-library/react";

import Button from "../src/Button";

describe("@osc/Button", () => {
  it("renders the component", () => {
    const container = render(<Button>Test</Button>);
    expect(container).toMatchSnapshot();
  });
});
