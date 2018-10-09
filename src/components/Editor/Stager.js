import React from "react";
import Snackbar from "../Snackbar";
import Button from "../Button";

export const StagerContext = React.createContext({});

const dlv = (obj, key, def, p) => {
  p = 0;
  key = key.split ? key.split(".") : key;
  while (obj && p < key.length) obj = obj[key[p++]];
  return obj === undefined || p < key.length ? def : obj;
};

const dset = (path, value, obj = {}) => {
  if (!obj) obj = {};
  if (path.indexOf(".") === -1) {
    obj[path] = value;
  } else {
    const route = path.split(".");
    const lastKey = route.pop();
    let reference = obj;
    for (const key of route) {
      if (!reference[key]) reference[key] = {};
      reference = reference[key];
    }
    reference[lastKey] = value;
  }
  return obj;
};

const transformToArray = (property, propKey, propValue, isArray, query, newValue, changes) => {
  let p = 2, arrayName, newProperty;
  newProperty = property.split ? property.split(".") : property;
  query = query.split ? query.split(".") : query;
  if (isArray) {
    arrayName = newProperty[newProperty.length - 1];
    let existingArray = dlv(changes, newProperty);
    if (existingArray) {
      const existingItem = existingArray.find(item => item[propKey] === propValue);
      if (existingItem) {
        switch (query.length) {
          case 1:
            existingItem[query[0]] = newValue;
            return { veryNewValue: existingArray }
          case 2:
            existingItem[query[0]] = { [query[1]]: newValue };
            return { veryNewValue: existingArray }
          case 3:
            existingItem[query[0]] = { [query[1]]: { [query[2]]: newValue } };
            return { veryNewValue: existingArray }
        }
      } else {
        switch (query.length) {
          case 1:
            existingArray.push({ [propKey]: propValue, [query[0]]: newValue });
            return { veryNewValue: existingArray }
          case 2:
            existingArray.push({ [propKey]: propValue, [query[0]]: { [query[1]]: newValue } });
            return { veryNewValue: existingArray }
          case 3:
            break;
        }
      }
    } else {
      const existingArray = [];
      
      switch (query.length) {
        case 1:
          existingArray.push({ [propKey]: propValue, [query[0]]: newValue });
          return { veryNewValue: existingArray }
        case 2:
          existingArray.push({ [propKey]: propValue, [query[0]]: { [query[1]]: newValue } });
          return { veryNewValue: existingArray }
        case 3:
          break;
      }
    }
  } else {
    return { veryNewValue: newValue };
  }

};
class Stager extends React.Component {
  state = {
    loading: true,
    errors: null,

    payload: {},

    commiting: false,

    // If the stager has been modified
    modified: false,
    // Changes staged
    changes: {},

    // Available on Context to commit a property to a value
    onChange: (property, propKey, propValue, isArray, query) => newValue => {
      const { veryNewValue } = transformToArray(property, propKey, propValue, isArray, query, newValue, this.state.changes)
      this.setState(state => {
        if (!isArray) state.changes[property] = newValue;
        else {
          const obj = dset(property, veryNewValue, state.changes);
          state.changes = obj;
        }
        return {
          modified: true,
          changes: state.changes,
        };
      });
    },
  };

  static getDerivedStateFromProps(props, state) {
    // If there are no changes staged,
    // Or there are changes staged AND we already started to commit
    if (!state.modified) {
      console.log("updating..");
      // Reset state back to initial and update with new props
      return {
        loading: props.isLoading,
        errors: props.errors,
        payload: props.payload,
        changes: {},
        modified: false,
        commiting: false,
      };
    }

    return null;
  }

  commit = async buttonState => {
    buttonState.loading();

    this.setState({ commiting: true });

    try {
      await this.props.onCommit(this.state.changes);
      // Remove changes. remove modified
      this.setState({ commiting: false, modified: false, changes: {} });
      buttonState.success();
    } catch (e) {
      this.setState({ commiting: false });
      console.warn("ERROR=", e);
      buttonState.error(e);
    }
  };

  revert = buttonState => {
    // buttonState.loading();
    this.setState({
      modified: false,
      changes: {},
    });
    // buttonState.success();
  };

  render() {
    const { modified, commiting, loading, error } = this.state;

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error!</p>;

    console.log("commit?", this.state.modified, this.state.commiting);

    return (
      <StagerContext.Provider value={this.state}>
        {this.props.children}

        <Snackbar open={modified || commiting}>
          <div>Would you like to save your changes?</div>
          <Snackbar.ButtonContainer>
            <Button
              onClick={this.revert}
              simple
              style={{ border: 0, color: "white" }}
              disabled={commiting}
            >
              Revert
            </Button>
            <Button onClick={this.commit} disabled={commiting}>
              Save
            </Button>
          </Snackbar.ButtonContainer>
        </Snackbar>
      </StagerContext.Provider>
    );
  }
}

export default Stager;
