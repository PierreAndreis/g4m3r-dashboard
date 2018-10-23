import React from "react";
import { css } from "emotion";
import Downshift from "downshift";
import Input from "./Input";
import { ChevronDownIcon } from "mdi-react";
import Box from "./Box";
import Util from "./../global/Util";

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
    const { onChange, payload, payloadProp, type, currentValue, values } = this.props;

    let tempValues, newValues;

    if (!values) tempValues = Util.dlv(payload, payloadProp);
    else newValues = values;

    function compare(a, b) {
      if (!a || !a.name || !b || !b.name) return 0;
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }

    switch (type) {
      case "role":
        newValues = tempValues
          .filter(role => role.name !== "@everyone" && !role.managed)
          .sort(compare)
          .map(role => ({
            key: role.id,
            value: `@${role.name}`,
          }));
        break;
      case "channel": // channels
        newValues = tempValues
          .filter(channel => channel.type === "text")
          .sort(compare)
          .map(channel => ({
            key: channel.id,
            value: `#${channel.name}`,
          }));
        break;
      case "category": // category channels
        newValues = tempValues
          .filter(channel => channel.type === "category")
          .sort(compare)
          .map(channel => ({
            key: channel.id,
            value: `#${channel.name}`,
          }));
        break;
      case "Permission":
        newValues = newValues.map(perm => ({ key: perm.id, value: perm.value }));
        break;
      default:
    }

    const placeholder = newValues.find(item => item.key === currentValue);
    const placeholderValue = placeholder ? placeholder.value : `None`;
    return (
      <Downshift
        onChange={item => typeof onChange === "function" && onChange(item.key)}
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
              placeholder={placeholderValue}
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
                  {newValues
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
