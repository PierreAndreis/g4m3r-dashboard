import React from "react";
import { Query, Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import Input from "../Input";
import Checkbox from "../Checkbox";
import Select from "../Select";

const StagerContext = React.createContext({});

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

class Stager extends React.Component {
  state = {
    loading: true,
    errors: null,

    payload: {},

    commiting: false,
    modified: false,
    changes: {},
    onChange: property => newValue => {
      this.setState(state => ({
        modified: true,
        changes: { ...state.changes, [property]: newValue },
      }));
    },
  };

  static getDerivedStateFromProps(props, state) {
    console.log("isModified=", state.modified);
    console.log("isComitting=", state.commiting);

    if (!state.modified || (state.modified && state.commiting)) {
      console.log("updating..");
      return {
        loading: props.query.loading,
        errors: props.query.errors,
        payload: props.query.data,
        changes: {},
        modified: false,
        commiting: false,
      };
    }
    return null;
  }

  commit = () => {
    let guildId = this.props.match.params.guildId;

    this.setState({
      commiting: true,
    });

    this.props.onCommit(this.state.changes);
  };

  render() {
    const { loading, error, payload } = this.state;
    const commit = this.props.commit;

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error!</p>;

    return (
      <StagerContext.Provider value={this.state}>
        {this.props.children}
        {this.state.modified ? <button onClick={this.commit}>Commit</button> : null}
      </StagerContext.Provider>
    );
  }
}

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
          value={translateValue({ mutate, query }, state)}
          onChange={state.onChange(mutate)}
          {...otherProps}
        />
      )}
    </StagerContext.Consumer>
  );

  onCommit = commit => changes => {
    const guildId = this.props.match.params.guildId;
    let query = {
      variables: {
        guildId,
        input: changes,
      },
    };

    commit(query);
  };

  render() {
    const { mutation, query, ...props } = this.props;
    const guildId = props.match.params.guildId;

    return (
      <Query query={query} variables={{ guildId: guildId }}>
        {query => (
          <Mutation mutation={mutation}>
            {commit => (
              <Stager {...props} query={query} onCommit={this.onCommit(commit)} />
            )}
          </Mutation>
        )}
      </Query>
    );
  }
}

export default withRouter(WrapperEditorForGraphQL);
