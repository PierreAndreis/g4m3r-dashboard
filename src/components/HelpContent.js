import React from "react";
import Box from "./Box";

const HelpContent = ({...props}) => {
	return (
		<div>
			<Box.Title>{props.title}</Box.Title>
			<Box.Body padding>
				<p>
					{props.description}
				</p>
				{props.img ? <img src={props.img} width="90%" /> : null	}
			</Box.Body>
		</div>
	)
};

export default HelpContent;