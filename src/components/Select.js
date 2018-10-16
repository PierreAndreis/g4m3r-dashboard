import React from "react";
import { css } from "emotion";
import Downshift from "downshift";
import Input from "./Input";
import { ChevronDownIcon } from "mdi-react";
import Box from "./Box";

const wrapper = css`
  width: 250px;
  position: relative;
`;

const dropdownMenu = css`
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0;
  margin-top: 5px;
  border-radius: 5px;

  /* This is bad. Use portal in the future */
  z-index: 99;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  & > li {
    list-style-type: none;
    padding: 15px;
    text-size: 15px;
  }
`;

class Select extends React.Component {
  render() {
    const { placeholder, onChange } = this.props;

    return (
      <Downshift
        onChange={item => typeof onChange === "function" && onChange(item.value)}
        itemToString={item => (item ? item.value : "")}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          toggleMenu,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
          setState,
        }) => (
          <div className={wrapper}>
            <Input
              {...getInputProps()}
              placeholder={placeholder}
              icon={{
                right: props => (
                  <div onClick={() => toggleMenu()}>
                    <ChevronDownIcon {...props} />
                  </div>
                ),
              }}
            />
            <div {...getMenuProps()}>
              {isOpen ? (
                <Box className={dropdownMenu}>
                  {this.props.values
                    .filter(
                      item =>
                        !inputValue ||
                        item.value.toLowerCase().includes(inputValue.toLowerCase())
                    )
                    .map((item, index) => (
                      <li
                        {...getItemProps({
                          key: item.key,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index ? "lightgray" : "white",
                            fontWeight: selectedItem === item ? "bold" : "normal",
                          },
                        })}
                      >
                        {item.value}
                      </li>
                    ))}
                </Box>
              ) : null}
            </div>
          </div>
        )}
      </Downshift>
    );
  }
}

export default Select;
