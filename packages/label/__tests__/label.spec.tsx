import React from "react";
import { render } from "@testing-library/react";

import Label from "../src/Label";

describe("@osc/Label", () => {
  it("renders the component", () => {
    const container = render(<Label text="content" />);
    expect(container).toMatchSnapshot();
  });
});
