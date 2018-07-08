import React, { Component } from "react";
// import { css } from "emotion";

import { Heading, SubHeader } from "../../../../components/Typography";
// import Box from "../../../../components/Box";
// import Input from "../../../../components/Input";
// import Select from "../../../../components/Select";
// import gql from "graphql-tag";
// import { Query } from "react-apollo";
// import Checkbox from "../../../../components/Checkbox";

// const boxesHeader = css`
//   display: flex;
//   & > div {
//     margin-right: 20px;
//   }
// `;

class CommandsEditor extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <Heading>Commands</Heading>
          <SubHeader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </SubHeader>
        </section>
        <section />
      </React.Fragment>
    );
  }
}

export default CommandsEditor;
