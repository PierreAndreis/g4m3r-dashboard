import React from "react";

import Button from "./Button";
import { render, fireEvent } from "react-testing-library";

test("it mounts", () => {
  const { container, rerender } = render(<Button>This is a basic button</Button>);

  expect(container.firstChild).toMatchSnapshot();

  rerender(<Button loading>This is a loading button</Button>);

  expect(container.firstChild).toMatchSnapshot();

  rerender(<Button error>This is a error button</Button>);

  expect(container.firstChild).toMatchSnapshot();

  rerender(<Button success>This is a success button</Button>);

  expect(container.firstChild).toMatchSnapshot();

  rerender(<Button disabled />);
  expect(container.firstChild).toHaveAttribute("disabled");
  expect(container.firstChild).toMatchSnapshot();
});

test("given className, it adds", () => {
  const { container } = render(
    <Button className="hello-test">This is a basic button</Button>
  );
  expect(container.firstChild.className).toContain("hello-test");
});

test("onClick is called if clicked giving button actions", () => {
  const onClick = jest.fn();
  const { container } = render(<Button onClick={onClick} />);

  fireEvent.click(container.firstChild);
  expect(onClick).toHaveBeenCalledTimes(1);

  expect(onClick).toHaveBeenCalledWith(
    expect.objectContaining({
      success: expect.any(Function),
      loading: expect.any(Function),
      error: expect.any(Function),
    })
  );
});

test("buttonActions - loading", () => {
  const onClick = jest.fn(buttonActions => {
    buttonActions.loading();
  });
  const { container } = render(<Button onClick={onClick} />);

  fireEvent.click(container.firstChild);
  expect(container.firstChild).toMatchSnapshot();
});

test("buttonActions - success", async () => {
  const onClick = jest.fn(buttonActions => {
    buttonActions.success();
  });
  jest.useFakeTimers();

  const { container, asFragment } = render(<Button onClick={onClick} />);

  const defaultMode = asFragment();
  fireEvent.click(container.firstChild);
  expect(container.firstChild).toMatchSnapshot();

  jest.runAllTimers();
  // checks if success will revert back to default after timer
  expect(defaultMode.isEqualNode(asFragment())).toBeTruthy();
});

test("buttonActions - error", async () => {
  const onClick = jest.fn(buttonActions => {
    buttonActions.error();
  });
  jest.useFakeTimers();

  const { container, asFragment } = render(<Button onClick={onClick} />);

  const defaultMode = asFragment();
  fireEvent.click(container.firstChild);
  expect(container.firstChild).toMatchSnapshot();

  jest.runAllTimers();
  // checks if error will revert back to default after timer
  expect(defaultMode.isEqualNode(asFragment())).toBeTruthy();
});
