import React, { Component } from "react";

class Row extends Component {
  state = { title: "This is Row Component" };
  render() {
    return <div className="flex"> {this.state.title}</div>;
  }
}

export default Row;
