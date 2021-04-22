import React, { Component } from "react";
// Dropdown component I built froms scratch
import Dropdown from "./components/Dropdown";
// Data sets that populate dropdown menu.
import { InputData } from "./input/InputData";
import { LargeInputData } from "./input/LargeInputData";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Change the line directely below this to "items: LargeInputData," if you would like to load larger data set
      items: InputData,
    };
  }

  // helper functions for Dropdown to be accessed with arrow keys and tab keys
  componentDidMount() {
    window.addEventListener("keydown", this.tabKeyPressed);
    window.addEventListener("mousedown", this.mouseClicked);
  }

  tabKeyPressed = (e) => {
    if (e.keyCode === 9) {
      document.querySelector("body").classList.remove("noFocus");
      window.removeEventListener("keydown", this.tabKeyPressed);
      window.addEventListener("mousedown", this.mouseClicked);
    }
  };

  mouseClicked = () => {
    document.querySelector("body").classList.add("noFocus");
    window.removeEventListener("mousedown", this.mouseClicked);
    window.addEventListener("keydown", this.tabKeyPressed);
  };

  // this functions allows parent component (this file) to have it's state set from within child (Dropdown) according to selected item
  toggleItem = (id, key) => {
    const temp = [...this.state["items"]];
    temp[id].selected = !temp[id].selected;
    this.setState({
      [key]: temp,
    });
  };

  render() {
    const { items } = this.state;

    return (
      <div className="App">
        <h3>Dropdown Demo</h3>
        <Dropdown
          name="Item"
          title="Select"
          list={items}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
