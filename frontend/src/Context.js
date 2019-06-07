/**
 * we shall have the context api here for rendering elements
 * elements are to be rendered from a common place
 * this file shall hold all the fetch api calls
 * we render an array so that it is easier for us to do retrieval
 */

import React, { Component } from "react";
import Tables from "./Components/Tables";
const context = React.createContext({});
export class Provider extends Component {
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    fetch("http://localhost:3001/api/data", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            data: json.message
          });
        }
      });
  };
  state = {
    data: []
  };
  render() {
    return (
      <context.Provider value={this.state.data}>
        {this.props.children}
      </context.Provider>
    );
  }
}
const Consumer = context.Consumer;
export { Consumer };
