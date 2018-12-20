import React from "react";
import RemoveableList from "./RemoveableList";
import { render, fireEvent } from "react-testing-library";

describe("RemovableList", () => {
  it("mounts", () => {
    expect(render(<RemoveableList value={[]} />)).toMatchSnapshot();
  });

  it("renders array", () => {
    const { queryByText } = render(<RemoveableList value={["item 1", "item 2"]} />);

    expect(queryByText(/item 1/)).toBeTruthy();
    expect(queryByText(/item 2/)).toBeTruthy();
    expect(queryByText(/item 3/)).not.toBeTruthy();
    expect(queryByText(/devil/)).not.toBeTruthy();
  });

  it("item can be removable", () => {
    const onChange = jest.fn();

    const { getByLabelText } = render(
      <RemoveableList value={["item 1", "item 2", "item 3"]} onChange={onChange} />
    );

    fireEvent.click(getByLabelText("delete item 1"));

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(["item 2", "item 3"]);
  });
});
