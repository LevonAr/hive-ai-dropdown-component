import React, { Component } from "react";
import Dropdown from "./components/Dropdown";

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
          title: "Izmir",
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

  render() {
    const { locations } = this.state;

    return (
      <div className="App">
        <p>Dropdown menu examples</p>

        <h3>Regular</h3>

        <div className="wrapper">
          <Dropdown
            name="location"
            title="Select location"
            list={locations}
            onChange={this.onChange}
          />
        </div>

        <h3>Searchable</h3>

        <div className="wrapper">
          <Dropdown
            name="location"
            searchable={["Search for location", "No matching location"]}
            title="Select location"
            list={locations}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
