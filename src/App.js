import React, { Component } from "react";
import Dropdown from "./components/Dropdown";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      locations: [
        {
          id: 0,
          title: "New York",
          selected: false,
          key: "location",
        },
        {
          id: 1,
          title: "Dublin",
          selected: false,
          key: "location",
        },
        {
          id: 2,
          title: "California",
          selected: false,
          key: "location",
        },
        {
          id: 3,
          title: "Yerevan",
          selected: false,
          key: "location",
        },
        {
          id: 4,
          title: "Shushi",
          selected: false,
          key: "location",
        },
        {
          id: 5,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 4,
          title: "Shushi",
          selected: false,
          key: "location",
        },
        {
          id: 5,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 4,
          title: "Shushi",
          selected: false,
          key: "location",
        },
        {
          id: 5,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 4,
          title: "Shushi",
          selected: false,
          key: "location",
        },
        {
          id: 5,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 4,
          title: "Shushi",
          selected: false,
          key: "location",
        },
        {
          id: 5,
          title: "Oslo",
          selected: false,
          key: "location",
        },
        {
          id: 4,
          title: "Shushi",
          selected: false,
          key: "location",
        },
        {
          id: 5,
          title: "Oslo",
          selected: false,
          key: "location",
        },
      ],
    };
  }

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

  onChange = (item, name) => {
    console.log(item, name);
  };

  toggleItem = (id, key) => {
    const temp = [...this.state["locations"]];

    temp[id].selected = !temp[id].selected;

    this.setState({
      [key]: temp,
    });
  };

  render() {
    const { locations } = this.state;

    return (
      <div className="App">
        <h3>Dropdown Demo</h3>
        <Dropdown
          name="location"
          title="Select"
          list={locations}
          onChange={this.onChange}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
