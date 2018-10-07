import React from 'react';
import Box from "./Box";
import Editor from "./Editor";


const SettingsToggler = props => {
  return <Box padding>
      <Box.Title>{props.boxTitle}</Box.Title>
      <Box.Body>
        <Editor.Checkbox query={props.editorQuery} mutation={props.editorMutate}>
          {props.title}
        </Editor.Checkbox>
      </Box.Body>
    </Box>;
};

export default SettingsToggler;
