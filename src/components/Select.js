import React from "react";
import { css } from "emotion";
import Downshift from "downshift";
import Input from "./Input";
import { ChevronDownIcon } from "mdi-react";
import Box from "./Box";

const wrapper = css`
  width: 100%;
  position: relative;
`;

const dropdownMenu = css`
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0;
  margin-left: -2px;
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
    font-size: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;

class Select extends React.Component {
  render() {
    const { onChange, currentValue, values, autoComplete } = this.props;

    if (!values) {
      return <div>Error!</div>;
    }

    const placeholder = values.find(item => item.key === currentValue);
    const placeholderValue = placeholder ? placeholder.value : `None`;
    return (
      <Downshift
        onChange={item => typeof onChange === "function" && onChange(item.key)}
        itemToString={item => (item ? item.value : "")}
      >
        {({
          getInputProps,
          getItemProps,
          toggleMenu,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <div className={wrapper}>
            <Input
              {...getInputProps({ disabled: !autoComplete })}
              placeholder={placeholderValue}
              buttonMode={!autoComplete}
              onClick={toggleMenu}
              icon={{
                right: props => (
                  <div onClick={toggleMenu}>
                    <ChevronDownIcon {...props} />
                  </div>
                ),
              }}
            />
            <div {...getMenuProps()}>
              {isOpen ? (
                <Box className={dropdownMenu}>
                  {values
                    .filter(
                      item =>
                        autoComplete
                          ? !inputValue ||
                            item.value.toLowerCase().includes(inputValue.toLowerCase())
                          : true
                    )
                    .map((item, index) => (
                      <li
                        {...getItemProps({
                          key: item.key,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index
                                ? "rgba(0, 0, 0, 0.05)"
                                : "white",
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
