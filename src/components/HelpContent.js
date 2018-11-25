import React from "react";
import Box from "./Box";

const HelpContent = ({...props}) => {
	return (
		<div>
      <Box.Title>{props.title}</Box.Title>
      <Box.Body padding>
        <p>{props.text}</p>
        {props.image ? <img src={props.image} alt="" width="90%" /> : null}
      </Box.Body>
		</div>
	);
};

export default HelpContent;