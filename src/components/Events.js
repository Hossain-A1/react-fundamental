import React, { Component } from 'react'

export default class Events extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       goals: 0,
    };
  //  this.makeGoalsHandler = this.makeGoalsHandler.bind(this)
  }
  makeGoalsHandler = () =>{
    this.setState({
      goals: this.state.goals +1,
    })
  }

  increaseNum = () =>{
    this.setState({
      goals: this.state.goals + 1,
    })
  }
  render() {
    return (
      <div>
        {/* <h2>Goals: {this.state.goals}</h2> */}
        {/* <button onClick={this.makeGoalsHandler.bind(this)}>Make goals</button> */}
        {/* <button onClick={this.makeGoalsHandler}>Make goals</button> */}
        {/* <button onClick={this.increaseNum}>aficiant</button> */}
      </div>
    )
  }
}
