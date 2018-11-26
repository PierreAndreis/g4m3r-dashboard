import React from "react";
import { css } from "emotion";
import Box from "./Box";

const LinkColor = css`
  a:link {
    color: #0D6EB8; 
    background-color: transparent; 
    text-decoration: none;
  }

  a:hover {
    color: #00a6ff;
    background-color: transparent;
    text-decoration: underline;
  }

  a:visited {
    color: #23D8CA;
    background-color: transparent;
    text-decoration: none;
  }

  a {
    cursor: pointer;
  }
`;

const HelpContent = ({...props}) => {
	return (
		<div className={LinkColor}>
      <Box.Title>{props.title}</Box.Title>
      <Box.Body padding>
        <p>{props.text}</p>
        {props.image ? <img src={props.image} alt="" width="90%" /> : null}
      </Box.Body>
      { props.footer && 
      (
        <Box.Footer padding>
          <a onClick={()=> window.open(props.footer.link, "_blank")}>{props.footer.text}</a>
        </Box.Footer>
      )}
		</div>
	);
};

export default HelpContent;