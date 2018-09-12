import React, { Component } from "react";
import Counter from "./counter";
var _ = require("lodash");

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn-primary btn-sm m-2">
          Reset
        </button>

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete2 = item => {
    console.log("Delete entire counter", item);
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = item => {
    this.setState({
      counters: _.reject(this.state.counters, function(e) {
        return e.id === item.id;
      })
    });
  };
}

export default Counters;
