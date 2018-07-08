import React from "react";
import { css } from "emotion";
import Downshift from "downshift";
import Input from "./Input";
import { ChevronDownIcon } from "../../node_modules/mdi-react";
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
  overflow-y: auto;
  padding: 0;
  margin-top: 5px;
  border-radius: 5px;
  & > li {
    list-style-type: none;
    padding: 15px;
    text-size: 15px;
  }
`;

class Select extends React.Component {
  render() {
    return (
      <Downshift
        onChange={selection => console.log(selection)}
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
        }) => (
          <div className={wrapper}>
            {/* <label {...getLabelProps()}>Type a timezone</label> */}
            <Input
              {...getInputProps()}
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
