import React, { Component } from "react";
import { css } from "emotion";

import { Heading, SubHeader, Heading2 } from "../../../../components/Typography";
import Box from "../../../../components/Box";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Checkbox from "../../../../components/Checkbox";

const boxesHeader = css`
  display: flex;
  & > div {
    margin-right: 20px;
  }
`;

const timezoneQuery = gql`
  {
    listTimezones
  }
`;

const cleanUpTimezone = timezones =>
  timezones.map(timezone => {
    let value = timezone.replace("_", " ");

    return {
      key: timezone,
      value: value,
    };
  });

class GeneralEditor extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <Heading>General</Heading>
          <SubHeader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </SubHeader>
        </section>
        <section>
          <Heading2>Overview</Heading2>
          <div className={boxesHeader}>
            <Box padding>
              <Box.Title>Prefix</Box.Title>
              <Box.Body>
                <Input placeholder="alexa" />
              </Box.Body>
            </Box>
            <Box padding>
              <Box.Title>Timezone</Box.Title>
              <Box.Body>
                <Query query={timezoneQuery}>
                  {({ loading, error, data }) => {
                    if (loading) return "Loading";
                    if (error) return "Error";
                    let values = cleanUpTimezone(data.listTimezones);

                    return <Select values={values} />;
                  }}
                </Query>
              </Box.Body>
            </Box>
            <Box padding>
              <Box.Title>Something?</Box.Title>
              <Box.Body>
                <Checkbox>Test</Checkbox>
              </Box.Body>
            </Box>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

<Select />;

export default GeneralEditor;
