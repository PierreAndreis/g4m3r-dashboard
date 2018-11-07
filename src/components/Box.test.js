import React from "react";

import Box from "./Box";
import { render } from "react-testing-library";

test("it mounts", () => {
  const { container } = render(<Box>
    <Box.Title>Title!</Box.Title>
    <Box.Body>Body!</Box.Body>
    <Box.Option>
      <div>Label</div>
      <div>Select</div>
    </Box.Option>
  </Box>);

  expect(container.firstChild).toMatchSnapshot();
});

test("Option throws if children is not of div type", () => {
  jest.spyOn(console, 'error');
  // Surpress console.error
  global.console.error.mockImplementation(() => {});

  expect(() => render(<Box.Option><select /></Box.Option>)).toThrow()
  global.console.error.mockRestore();
})
