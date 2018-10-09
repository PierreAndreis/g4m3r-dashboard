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

const getPlaceholder = (props, state) => {
  return dlv(state.payload, props.query);
};

const getFromArray = (array, propKey, value, propFetch) => {
  const foundObject = array.find(item => item[propKey] === value);
  return foundObject ? foundObject[propFetch] : "None";
};

const getEditedValue = (props, state) => {
  if (props.findFromArray) {
    const array = dlv(state.payload, props.query);
    const value = dlv(state.payload, props.mutate);
    return getFromArray(array, props.propKey, value, props.propFetch);
  }

  let obj, array;
  if (Array.isArray(state.payload)) {
    obj = state.payload.find(data => data[props.propKey] === props.propValue);
  }
  let returnValue;
  if (state.changes.hasOwnProperty(props.mutate)) {
    returnValue = state.changes[props.mutate];
  } else if (array = dlv(state.changes, props.mutate)) { 
    const existingItem = array.find(item => item[props.propKey] === props.propValue);
    returnValue = dlv(existingItem || obj, props.query);
  } else returnValue = dlv(obj || state.payload, props.query);

  return returnValue;
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

  static Checkbox = ({ mutate, query, propKey, propValue, isArray, ...otherProps }) => (
    <StagerContext.Consumer>
      {state => (
        <Checkbox
          value={getEditedValue({ mutate, query, propKey, propValue }, state)}
          onChange={state.onChange(mutate, propKey, propValue, isArray, query)}
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
          placeholder={translateValue({ mutate, query, ...otherProps }, state)}
          onChange={state.onChange(mutate)}
          {...otherProps}
        />
      )}
    </StagerContext.Consumer>
  );

  static Mapper = ({ path = "", mutate, children, ...otherProps }) => (
    <StagerContext.Consumer>
      {state => {
        const arr = dlv(state.payload, path, []);

        console.log("arr=", arr, state, path);
        if (!Array.isArray(arr)) throw new Error(`Path ${path} must be an array!`);

        // This has some perfomance issues because it's a new object for every render
        const newContext = { ...state, payload: arr };

        return arr.map((value, index) => (
          <StagerContext.Provider value={newContext} key={index}>
            {typeof children === "function" ? children(value) : children}
          </StagerContext.Provider>
        ));
      }}
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
    const { mutation, query, children, ...props } = this.props;
    const guildId = props.match.params.guildId;

    return (
      <Query query={query} variables={{ guildId: guildId }}>
        {query =>
          console.log("queryResult=", query) || (
            <Mutation mutation={mutation}>
              {commit => (
                <Stager
                  {...props}
                  isLoading={query.loading}
                  errors={query.errors}
                  payload={query.data}
                  onCommit={this.onCommit(commit)}
                >
                  {children}
                </Stager>
              )}
            </Mutation>
          )
        }
      </Query>
    );
  }
}

export default withRouter(WrapperEditorForGraphQL);
