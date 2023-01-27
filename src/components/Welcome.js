import React, { Component } from 'react'

export default class Welcome extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      place: 'react.js',
    }
  }

  changePlace(){
    this.setState({
      place: 'Hossain',
    })
  }
  render() {
    return (
      <div>
        <h3>welcome {this.state.place}</h3>
        <button onClick={()=> this.changePlace()}> go to react</button>
      </div>
    )
  }
}
