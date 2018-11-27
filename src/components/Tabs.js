import React from "react";
import { Transition, animated } from "react-spring";

import Button from "./Button";

class TabsManager extends React.Component {
  constructor(props) {
    super(props);

    const sections = this.getSections();

    if (sections.length < 1)
      throw new Error(
        "No section found inside TabsManager. At least one section with props name should be present"
      );

    this.state = {
      selected: sections[0].props.name,
    };
  }

  static Section = ({ children, name, ...props }) => (
    <section {...props}>{children}</section>
  );

  changeTab = tabName => () => {
    this.setState({
      selected: tabName,
    });
  };

  getSections = () => {
    return (
      React.Children.toArray(this.props.children)
        // Remove those missing a name props
        .filter(props => !props.name)
    );
  };

  render() {
    const selected = this.state.selected;
    const sections = this.getSections();

    return (
      <React.Fragment>
        <section>
          {sections.map(({ props }) => {
            return (
              <Button
                key={props.name}
                onClick={this.changeTab(props.name)}
                simple
                active={selected === props.name}
              >
                {props.name}
              </Button>
            );
          })}
        </section>
        <section>
          <Transition
            native
            items={selected}
            config={{ precision: 0.1 }}
            from={{ position: "absolute", transform: "translateY(-10px)", opacity: 0 }}
            enter={{ transform: "translateY(0)", opacity: 1 }}
            update={{ position: "relative" }}
            leave={{ position: "absolute", transform: "translateY(30px)", opacity: 0 }}
          >
            {selected => props => (
              <animated.div style={props}>
                {sections.find(l => l.props.name === selected)}{" "}
              </animated.div>
            )}
          </Transition>
        </section>
      </React.Fragment>
    );
  }
}

export default TabsManager;
