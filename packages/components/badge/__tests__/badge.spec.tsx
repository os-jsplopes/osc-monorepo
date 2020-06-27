import React from "react";
import { render } from "@testing-library/react";
import Badge from "../src/Badge";

describe("@osc/Badge", () => {
  it("renders the component", () => {
    const container = render(<Badge>3</Badge>);
    expect(container).toMatchSnapshot();
  });
});
