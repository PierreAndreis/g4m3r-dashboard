import React from "react";
import { css } from "emotion";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";

const contact = css`{
  margin: 5px;
  padding: 2px;
`;

const contactSpan = css`
  font-size: 1.2em;
  text-decoration: none;
  color: #333;
  border: 1px solid #bbb;
`;

function RemoveableList(props) {
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <div className={contact}>
            <div key={index}>
              <span className={contactSpan}>
                {index + 1}. {item}
              </span>
              <ChevronDownIcon {...props} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RemoveableList;
