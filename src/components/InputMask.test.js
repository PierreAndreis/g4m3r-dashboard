import React from "react";

import InputMask, { Masks } from "./InputMask";

import { render, fireEvent } from "react-testing-library";

const exampleMask = {
  in: value => Number(value) + 1,
  out: value => Number(value) - 1,
};

describe("InputMask", () => {
  it("Mounts", () => {
    const { container } = render(
      <InputMask mask={exampleMask} value="2" onChange={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });

  it("masks the value", () => {
    const onChange = jest.fn();

    const { getByLabelText } = render(
      <InputMask
        mask={exampleMask}
        value={10}
        onChange={onChange}
        aria-label="input-test"
      />
    );

    const input = getByLabelText("input-test");

    // @fix: why string here? because "value" on the dom is always a string
    expect(input.value).toBe(String(exampleMask.in("10")));

    const event = {
      target: { value: "1" },
    };

    fireEvent.change(input, event);

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(exampleMask.out(event.target.value));
  });

  it("masks the placeholder", () => {
    const { getByLabelText } = render(
      <InputMask mask={exampleMask} placeholder={10} aria-label="input-test" />
    );

    const input = getByLabelText("input-test");

    // @fix: why string here? because "value" on the dom is always a string
    expect(input.placeholder).toBe(String(exampleMask.in("10")));
  });

  it("works without placeholder", () => {
    const { getByLabelText } = render(
      <InputMask mask={exampleMask} aria-label="input-test" />
    );

    const input = getByLabelText("input-test");

    expect(input.placeholder).toBe("");
  });
});

describe("Input Masks Helpers", () => {
  it("secondsToMs works properly", () => {
    expect(Masks.secondsToMs.in(10)).toMatchSnapshot();
    expect(Masks.secondsToMs.out(10)).toMatchSnapshot();
  });
});
