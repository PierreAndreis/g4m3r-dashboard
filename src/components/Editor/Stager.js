import React from "react";

import Snackbar from "../Snackbar";
import Button from "../Button";

export const StagerContext = React.createContext({});

class Stager extends React.Component {
  state = {
    loading: true,
    errors: null,

    validationErrors: new Map([]),

    payload: {},

    commiting: false,

    // If the stager has been modified
    modified: false,
    // Changes staged
    changes: {},

    // Available on Context to commit a property to a value
    onChange: property => newValue => {
      this.setState(state => {
        state.changes[property] = newValue;
        return {
          modified: true,
          changes: state.changes,
        };
      });
    },

    resultValidation: (mutate, errorMessage) => {
      this.setState(({ validationErrors }) => {
        if (errorMessage) validationErrors.set(mutate, errorMessage);
        if (!errorMessage) validationErrors.delete(mutate);

        return {
          validationErrors,
        };
      });
    },
  };

  static getDerivedStateFromProps(props, state) {
    // If there are no changes staged,
    // Or there are changes staged AND we already started to commit
    if (!state.modified) {
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
    this.setState({
      modified: false,
      changes: {},
      validationErrors: new Map([]),
    });
    buttonState.success();
  };

  render() {
    const { modified, commiting, loading, error, validationErrors } = this.state;

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error!</p>;

    const isValid = validationErrors.size < 1;

    return (
      <StagerContext.Provider value={this.state}>
        {this.props.children}

        <Snackbar open={modified || commiting}>
          <Snackbar.ButtonContainer>
            <div>{isValid ? "Save Changes?" : "Your changes cannot be saved because something is wrong. Please double check your changes"}</div>
            <Button onClick={this.revert} simple disabled={commiting}>
              Revert
            </Button>
            <Button
              onClick={this.commit}
              disabled={commiting || !isValid}
              error={!isValid}
            >
              Save
            </Button>
          </Snackbar.ButtonContainer>
        </Snackbar>
      </StagerContext.Provider>
    );
  }
}

export default Stager;
