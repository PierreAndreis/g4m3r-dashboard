import React from "react";
import { Query, Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import Input from "../Input";
import Checkbox from "../Checkbox";
import Select from "../Select";

import Stager, { StagerContext } from "./Stager";

const dlv = (obj, key, def, p) => {
  p = 0;
  key = key.split ? key.split(".") : key;
  while (obj && p < key.length) obj = obj[key[p++]];
  return obj === undefined || p < key.length ? def : obj;
};

const translateValue = (props, state) => {
  return getEditedValue(props, state) || getPlaceholder(props, state);
};

const getEditedValue = (props, state) => {
  if (state.changes[props.mutate]) return state.changes[props.mutate];
};

const getPlaceholder = (props, state) => {
  return dlv(state.payload, props.query);
};
class WrapperEditorForGraphQL extends React.Component {
  static Input = ({ mutate, query, ...otherProps }) => (
    <StagerContext.Consumer>
      {state => (
        <Input
          value={getEditedValue({ mutate, query }, state)}
          placeholder={getPlaceholder({ mutate, query }, state)}
          onChange={e => state.onChange(mutate)(e.target.value)}
          {...otherProps}
        />
      )}
    </StagerContext.Consumer>
  );

  static Checkbox = ({ mutate, query, ...otherProps }) => (
    <StagerContext.Consumer>
      {state => (
        <Checkbox
          value={translateValue({ mutate, query }, state)}
          onChange={state.onChange(mutate)}
          {...otherProps}
        />
      )}
    </StagerContext.Consumer>
  );

  static Select = ({ mutate, query, ...otherProps }) => (
    <StagerContext.Consumer>
      {state => (
        <Select
          value={getEditedValue({ mutate, query }, state)}
          placeholder={getPlaceholder({ mutate, query }, state)}
          onChange={state.onChange(mutate)}
          {...otherProps}
        />
      )}
    </StagerContext.Consumer>
  );

  onCommit = commit => async changes => {
    const guildId = this.props.match.params.guildId;
    let query = {
      variables: {
        guildId,
        input: changes,
      },
    };

    return commit(query);
  };

  render() {
    const { mutation, query, ...props } = this.props;
    const guildId = props.match.params.guildId;

    return (
      <Query query={query} variables={{ guildId: guildId }}>
        {query => (
          <Mutation mutation={mutation}>
            {commit => (
              <Stager
                {...props}
                isLoading={query.loading}
                errors={query.errors}
                payload={query.data}
                onCommit={this.onCommit(commit)}
              />
            )}
          </Mutation>
        )}
      </Query>
    );
  }
}

export default withRouter(WrapperEditorForGraphQL);
