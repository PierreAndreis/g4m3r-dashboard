import React from "react";
import { css } from "emotion";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";

const contact = css`
  margin: 5px;
  padding: 2px;
`;

const contactSpan = css`
  font-size: 1.2em;
  text-decoration: none;
  color: #333;
  border: 1px solid #bbb;
  background-color: #bbb;
`;

class RemoveableList extends React.Component {
  onChange = (values, item) => {
    const index = values.findIndex(value => value === item);

    if (index >= 0) values.splice(index, 1);
    else values.push(item);
    console.log(values);
    typeof this.props.onChange === "function" && this.props.onChange(values);
  };

  render() {
    return (
      <div>
        {this.props.value.map((item, index) => {
          return (
            <div className={contact} key={item}>
              <div>
                <span className={contactSpan}>
                  {index + 1}. {item}
                  <ChevronDownIcon
                    aria-label={`delete ${item}`}
                    onChange={this.onChange(this.props.value, item)}
                    {...this.props}
                  />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RemoveableList;
