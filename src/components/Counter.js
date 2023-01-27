import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       countNumber:0,
       name: 'userName'
    }
  };
  incrementHandler(){
    this.setState({
      countNumber: this.state.countNumber +1,
      name: 'Hossain'
    })
  };
  incrementTenHandler(){
    this.setState((prevState)=>({
      countNumber: prevState + 10,
    }))
  };
  decrementHandler(){
    this.setState({
      countNumber: this.state.countNumber -1,
      name: 'Alvy'
    })
  };



  render() {
    return (
      <div>
        <h1>Count: {this.state.countNumber}, Name: {this.state.name}</h1>
        <button onClick={()=> this.incrementHandler()}>increase</button>
        <button onClick={()=> this.incrementTenHandler()}>increase by ten</button>
        <button onClick={()=> this.decrementHandler()}>decrease</button>
      </div>
    )
  }
}
