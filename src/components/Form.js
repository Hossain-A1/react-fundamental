import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName:'',
    };
  }

  firstNameHandler(e) {
    this.setState({
      firstName: e.target.value,
    })
  }
  
  lastNameHandler(e) {
    this.setState({
      lastName: e.target.value,
    })
  }

  render() {
    return (
      <form>
        <div>
          <label htmlFor="first-name">First name</label>
          <input
            type="text"
            id="first-name "
            value={this.state.firstName}
            onChange={(e) => this.firstNameHandler(e)}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last name</label>
          <input
            type="text"
            id="last-name "
            value={this.state.lastName}
            onChange={(e) => this.lastNameHandler(e)}
          />
        </div>
        <div>
          <select>
            <option value="">React</option>
            <option value="">Vue</option>
            <option value="">Anguler</option>
          </select>
        </div>
      </form>
    );
  }
}
