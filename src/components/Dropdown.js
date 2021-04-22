import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    const { title, list } = this.props;

    this.state = {
      isListOpen: false,
      headerTitle: this.props.title,
      selectedItem: null,
      keyword: "",
      list,
    };
  }

  selectItem = (item) => {
    const { toggleItem } = this.props;
    const { title, id, key } = item;

    this.setState(
      {
        headerTitle: title,
        isListOpen: false,
      },
      () => toggleItem(id, key)
    );
  };

  toggleList = () => {
    this.setState((prevState) => ({
      isListOpen: !prevState.isListOpen,
    }));
  };

  render() {
    const { isListOpen, headerTitle } = this.state;
    const { list, toggleItem } = this.props;

    return (
      <div className="dd-wrapper">
        <button type="button" className="dd-header" onClick={this.toggleList}>
          <div className="dd-header-title">{headerTitle}</div>
          {isListOpen ? (
            <FontAwesome name="angle-up" size="2x" />
          ) : (
            <FontAwesome name="angle-down" size="2x" />
          )}
        </button>
        {isListOpen && (
          <div role="list" className="dd-list">
            {list.map((item) => (
              <button
                type="button"
                className="dd-list-item"
                key={item.id}
                onClick={() => toggleItem(item.id, item.key)}
              >
                {item.title} {item.selected && <FontAwesome name="check" />}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;