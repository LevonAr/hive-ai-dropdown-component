import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "./Dropdown.css";

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

  componentDidUpdate() {
    const { isListOpen } = this.state;

    setTimeout(() => {
      if (isListOpen) {
        window.addEventListener("click", this.close);
      } else {
        window.removeEventListener("click", this.close);
      }
    }, 0);
  }

  /*

  static getDerivedStateFromProps(nextProps) {
    const { list, title } = nextProps;
    const selectedItem = list.filter((item) => item.selected);

    if (selectedItem.length) {
      return {
        headerTitle: selectedItem[0].title,
      };
    }
    return { headerTitle: title };
  }

*/

  static getDerivedStateFromProps(nextProps) {
    const { list, title, name } = nextProps;
    console.log("nextProps", nextProps);
    const selectedItem = list.filter((item) => item.selected);

    const count = list.filter((item) => item.selected).length;

    if (count === 0) {
      return { headerTitle: title };
    }
    if (count === 1) {
      return { headerTitle: selectedItem[0].title };
    }
    if (count > 1) {
      return { headerTitle: `${count} ${name}s` };
    }
    return null;
  }

  close = () => {
    this.setState({
      isListOpen: false,
    });
  };

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
        <button
          type="button"
          className="dd-header-container"
          onClick={this.toggleList}
        >
          <div className="dd-header-title">{headerTitle}</div>
          <div className="dd-toggle-icon">
            {isListOpen ? (
              <FontAwesome name="angle-up" size="2x" />
            ) : (
              <FontAwesome name="angle-down" size="2x" />
            )}
          </div>
        </button>
        {isListOpen && (
          <div role="list" className="dd-list">
            <div className="dd-scroll-container">
              {list.map((item) => (
                <button
                  type="button"
                  className="dd-list-item"
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(item.id, item.key);
                  }}
                >
                  {item.title} {item.selected && <FontAwesome name="check" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
