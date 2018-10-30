/* eslint-disable no-cond-assign */
import React from "react";
import { Query, Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import Util from "./../../global/Util";
import Input from "../Input";
import Checkbox from "../Checkbox";
import Select from "../Select";

import Stager, { StagerContext } from "./Stager";

const translateValue = (props, state) => {
  return getEditedValue(props, state) || getPlaceholder(props, state);
};

const getPlaceholder = (props, state) => {
  return Util.dlv(state.payload, props.query);
};

const getFromArray = (array, propKey, value, propFetch) => {
  const foundObject = array.find(item => item[propKey] === value);
  return foundObject ? foundObject[propFetch] : "None";
};

const getEditedValue = (props, state) => {
  // find a certain value from a object within an array for a compenent
  if (props.findFromArray) {
    const array = Util.dlv(state.payload, props.query);
    const value = Util.dlv(state.payload, props.mutate);
    return getFromArray(array, props.propKey, value, props.propFetch);
  }

  // state.payload is the array of commands in the Editor.Mapper as example
  let obj, foundProp;
  if (Array.isArray(state.payload)) {
    obj = state.payload.find(data => data[props.propKey] === props.propValue);
  }

  let returnValue;
  // check if state.changes has a simple property
  if (state.changes.hasOwnProperty(props.mutate)) {
    returnValue = state.changes[props.mutate];
    // check if state.chanages has a nested property / array
  } else if ((foundProp = Util.dlv(state.changes, props.mutate))) {
    // if foundProp isArray, get object from within Array
    if (Array.isArray(foundProp)) {
      const existingItem = foundProp.find(
        item => item[props.propKey] === props.propValue
      );
      returnValue = Util.dlv(existingItem || obj, props.query);
      // if its not an array, get value from nested property
    } else {
      returnValue = Util.dlv(state.payload, props.query);
    }
  } else returnValue = Util.dlv(obj || state.payload, props.query);

  return returnValue;
};

class WrapperEditorForGraphQL extends React.Component {
  static Input = ({ mutate, query, type, validate, ...otherProps }) => (
    <StagerContext.Consumer>
      {state => {
        const errorMessage = state.validationErrors.get(mutate);

        return (
          <Input
            value={getEditedValue({ mutate, query }, state)}
            placeholder={getPlaceholder({ mutate, query }, state)}
            onChange={e => {
              state.onChange(mutate)(e.target.value);
              if (typeof validate === "function") {
                // Need stager to know if validation is up
                state.resultValidation(mutate, validate(e.target.value));
              }
            }}
            // todo, find how to create an error message
            errorMessage={errorMessage}
            mutate={mutate}
            {...otherProps}
          />
        );
      }}
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

  static Select = ({ mutate, query, values, ...otherProps }) => (
    <StagerContext.Consumer>
      {state => {
        if (typeof values === "function") {
          values = values(state.payload);
        }

        return (
          <Select
            value={getEditedValue({ mutate, query }, state)}
            currentValue={translateValue({ mutate, query, ...otherProps }, state)}
            onChange={state.onChange(mutate)}
            payload={state.payload}
            values={values}
            {...otherProps}
          />
        );
      }}
    </StagerContext.Consumer>
  );

  static Mapper = ({ path = "", mutate, children, ...otherProps }) => (
    <StagerContext.Consumer>
      {state => {
        const arr = Util.dlv(state.payload, path, []);

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
    const omitTypename = (key, value) => (key === "__typename" ? undefined : value);
    const newPayload = JSON.parse(JSON.stringify(changes), omitTypename);
    let query = {
      variables: {
        guildId,
        input: newPayload,
      },
    };

    return commit(query);
  };

  render() {
    const { mutation, query, children, ...props } = this.props;
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
              >
                {children}
              </Stager>
            )}
          </Mutation>
        )}
      </Query>
    );
  }
}

export default withRouter(WrapperEditorForGraphQL);
