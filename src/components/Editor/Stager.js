import React from "react";
import { inject, observer } from "mobx-react";

import Snackbar from "../Snackbar";
import Button from "../Button";

export const StagerContext = React.createContext({});

@inject('errorhandling')
@observer
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
    onChange: property => newValue => {
      this.setState(state => {
        state.changes[property] = newValue;
        return {
          modified: true,
          changes: state.changes,
        };
      });
    }
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
    this.setState({
      modified: false,
      changes: {},
    });
    this.props.errorhandling.removeAll();
    buttonState.success();
  };

  render() {
    const { modified, commiting, loading, error } = this.state;

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error!</p>;

    // console.log("commit?", this.state.modified, this.state.commiting, this.props.errorhandling.hasErrors);

    return (
      <StagerContext.Provider value={this.state}>
        {this.props.children}

        <Snackbar open={modified || commiting}>
          {
            this.props.errorhandling.hasErrors ?
              <div>Cannot save changes while errors exist!</div> :
              <div>Would you like to save your changes?</div>
          }
          <Snackbar.ButtonContainer>
            <Button
              onClick={this.revert}
              simple
              style={{ border: 0, color: this.props.errorhandling.hasErrors ? 'red' : "white" }}
              disabled={commiting}
            >
              Revert
            </Button>
            <Button onClick={this.commit} disabled={commiting || this.props.errorhandling.hasErrors}>
              Save
            </Button>
          </Snackbar.ButtonContainer>
        </Snackbar>
      </StagerContext.Provider>
    );
  }
}

export default Stager;
