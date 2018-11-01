import React from "react";
import Box from "../../../../components/Box";

export default (
  <div>
    <Box.Title>What is Capital Spam Max Allowed Percentage?</Box.Title>
    <Box.Body padding>
      <p>
        This sets the maximum allowed percentage of capital letters that can be used in a
        server. In order to prevent any abuse of mass deleting messages by setting the
        percentage too low we have set a minimum value of 60%.
      </p>
    </Box.Body>
  </div>
);
