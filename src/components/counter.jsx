import React, { Component } from "react";
import { link } from "fs";
var _ = require("lodash");

class Counter extends Component {
  state = {
    // value: this.props.counter.value,
    // key: this.props.key,
    masterCount: 0,
    tags: []
  };

  // constructor(x) {
  //   super();
  //   // this.handleIncrement = this.handleIncrement.bind(this);
  //   this.state.masterCount = this.state.tags.length;
  //   this.state.value = this.props.value;
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <React.Fragment>
        <ul>
          {this.state.tags.map(item => (
            <li key={item}>
              {item}
              <button
                key={item}
                className="btn m-1 btn-secondary btn-sm"
                onClick={() => this.handleDelete(item)}
              >
                delete item
              </button>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        {/* <h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn m-1 btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn m-1 btn-secondary btn-sm"
          onClick={this.handleNewItem}
        >
          New Item
        </button>
        <button
          className="btn btn-danger btn-sm m-1"
          onClick={() => this.props.onDelete(this.props.counter)}
        >
          Delete
        </button>
        {this.renderTags()}
      </div>
    );
  }

  //   incrementCount = () => {
  //     this.setState(state => ({ value: state.value + 1 }));
  //   };

  handleNewItem = () => {
    let temp = this.state.tags.slice(0, this.state.tags.length);
    temp.push("tag" + this.state.masterCount++);
    this.setState(state => ({
      value: this.state.value + 1,
      tags: temp
    }));
  };

  handleDelete = item => {
    // this.setState({ value: this.state.value + 1 });
    this.setState({
      // value: this.state.value - 1,
      tags: _.reject(this.state.tags, function(e) {
        return e === item;
      })
    });
  };

  // handleIncrement = () => {
  //   console.log("inc clicked");
  //   this.setState({ value: this.state.value + 1 });
  // };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //const { value } = this.props.counter.value;
    let value = this.props.counter.value;
    return value === 0 ? "None" : value;
  }
}

export default Counter;
