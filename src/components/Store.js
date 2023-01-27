import React, { Component } from "react";
import Storechild from "./Storechild";

export default class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalFruits: 20,
      fruitName: "",
    };
  }

  decreaseFruit = (fruitName) => {
    this.setState({
      totalFruits: this.state.totalFruits - 1,
      fruitName: fruitName,
    });
  };

  render() {
    return (
      <div>
        <h2>
          Total foods {this.state.totalFruits}--{this.state.fruitName}
        </h2>
        <Storechild decreaseFruit={this.decreaseFruit} />
      </div>
    );
  }
}
